'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// @mui
import Container from '@mui/material/Container';
import { Box, Skeleton, Stack, Typography } from '@mui/material';

// components
import AppHeader from 'src/components/app-header';
import { useSnackbar } from 'src/components/snackbar';
import { aiAnswer, freeQuestionAndAnswer, saveActionLog, saveQA } from 'src/helper/api_steam_helper';
import { usePreQuestion } from 'src/store/qa.store';

// relative imports (last)
import { MatchBox, MessageBox, DetaultQuestionBox } from '../components';


type Props = {
  id: string;
};

type chatType = {
  type: string;
  text: string;
}

export default function QuestionsAndAnswersSendView({ id }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  // const preQuestions = usePreQuestion((state) => state.resData);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [chatId, setChatId] = useState<string>();
  const [matchId, setMatchId] = useState<string>();
  const [QA, setQA] = useState<chatType[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);
  // const defaultQuestion = preQuestions[Number(id)];
  const storageQuestion = localStorage.getItem("storage-question") ?? ""

  const { question } = JSON.parse(storageQuestion);
  console.log("question", question)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [QA]);

  const freeQuestion = useCallback(async () => {
    setLoading(true);
    setValue('');

    try {
      const storedPlayer = localStorage.getItem("user");
      if (storedPlayer) {
        const { steamid } = JSON.parse(storedPlayer);
        const payload = { message: question, chatId, steamid };

        const res: any = await freeQuestionAndAnswer(payload);

        if (res?.data?.result) {
          setQA((prevQA) => [...prevQA, { type: "answer", text: res.data.result }]);

          if (res?.data?.userId) {
            setChatId(res.data.userId);
          }
        }
      }
    } catch (error) {
      if (error.status === 429) {
        enqueueSnackbar("Monthly API limit reached!", { variant: "error" });
      } else enqueueSnackbar("Server error!", { variant: "error" });
      console.error("Error fetching AI response:", error);
    } finally {
      setLoading(false);
    }
  }, [enqueueSnackbar, chatId, question]);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    if (id === "free-question") {
      freeQuestion();
    }
  }, [id, freeQuestion]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSend = async () => {
    if (!value.trim()) return;
    setLoading(true);
    setQA(prevQA => [...prevQA, { type: 'question', text: value }]);
    setValue('');
    try {
      const storedPlayer = localStorage.getItem("user");
      if (storedPlayer) {
        const { steamid } = JSON.parse(storedPlayer);
        const payload = chatId
          ? { message: value, chatId, steamid, }
          : { message: value, chatId, steamid, defaultQuestion: question };

        const res: any = await aiAnswer(payload);


        if (res?.data?.result) {
          setQA(prevQA => [...prevQA, { type: 'answer', text: res.data.result }]);

          if (res?.data?.userId) {
            setChatId(res.data.userId);
          }
          if (res?.data?.matchId) {
            setMatchId(res.data.matchId);
          }
        }
      }
    } catch (error) {
      if (error.status === 429) {
        enqueueSnackbar('Monthly API limit reached!', { variant: 'error' });
      }
      else enqueueSnackbar('Server error!', { variant: 'error' });
      console.error("Error fetching AI response:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveAnswer = async (questionNumber: number) => {
    const storedPlayer = localStorage.getItem("user");
    if (storedPlayer) {
      const { steamid } = JSON.parse(storedPlayer);
      const messages = [QA[questionNumber - 1], QA[questionNumber]];
      const data = { messages, steamid, matchId };
      try {
        await saveQA({ data });
        enqueueSnackbar('Successfully saved answer.');
      } catch (error) {
        console.error("error ", error)
        enqueueSnackbar('Server error!', { variant: 'error' });
      }
    }
  }

  const handleSaveAction = async (questionNumber: number, actionType: string) => {
    const storedPlayer = localStorage.getItem("user");
    if (storedPlayer) {
      const { steamid } = JSON.parse(storedPlayer);
      const messages = QA[questionNumber - 1];
      const data = { messages, steamid, action: actionType };
      try {
        await saveActionLog({ data });
        enqueueSnackbar('Successfully saved answer.');
      } catch (error) {
        console.error("error ", error)
        enqueueSnackbar('Server error!', { variant: 'error' });
      }
    }
  }


  return (
    <Container maxWidth="lg">
      <AppHeader title="Questions and awnsers" />

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: 1, px: { xs: 0, md: 10 } }}
      >
        <Stack
          spacing={3}
          alignItems="flex-end"
          sx={{
            mt: 4,
            width: 1,
          }}
        >
          <Stack spacing={1} direction="column" alignContent="flex-start" sx={{ width: 1 }}>
            <DetaultQuestionBox action>
              <Typography variant="h6" sx={{ fontWeight: 400 }}>
                {question}
              </Typography>
            </DetaultQuestionBox>
          </Stack>

          {QA.map((item, index) => (
            <>
              {item.type === 'answer' ? (
                <DetaultQuestionBox handleSaveAnswer={handleSaveAnswer} handleSaveAction={handleSaveAction} index={index}>
                  <Typography variant="inherit" sx={{ fontWeight: 400 }} dangerouslySetInnerHTML={{ __html: item.text.replace(/[*#]/g, "").replace(/\n/g, "<br />") }} />

                </DetaultQuestionBox>
              ) : (
                <MatchBox>
                  <Typography variant="h6" sx={{ fontWeight: 400 }}>
                    {item.text}
                  </Typography>
                </MatchBox>
              )}
            </>
          ))}

          <Box ref={messagesEndRef} />
        </Stack>

        {loading ? (
          <Skeleton variant="rectangular" width="100%" height={50} sx={{
            mb: 5,
            p: 3,
            borderRadius: "8px"
          }} />
        ) : (
          <MessageBox value={value} onChange={handleChange} onSend={handleSend} sx={{ py: 5 }} />
        )}

      </Stack>
    </Container>
  );
}
