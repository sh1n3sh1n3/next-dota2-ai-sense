'use client';

// React
import { useEffect, useRef, useState } from 'react';

// MUI
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

// hooks
import { useAuthUser } from 'src/hooks/use-auth';

// components
import AppTitle from 'src/components/app-title';
import { usePreQuestion } from 'src/store/qa.store';
import { getLimitCount, getPreQuestion } from 'src/helper/api_steam_helper';

// local components (relative imports last)
import { MessageBox, QuestionBox, UpgradeBox } from '../components';

export default function QuestionsAndAnswersView() {
  const { user } = useAuthUser();
  const router = useRouter();
  const preQuestions = usePreQuestion((state) => state.resData);
  const savedQuestion = usePreQuestion((state) => state.saveQuestion)
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<string>('')
  const hasRun = useRef(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const storedPlayer = localStorage.getItem("user");
  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    const fetchQuestions = async () => {
      if (storedPlayer) {
        try {
          const { steamid } = JSON.parse(storedPlayer);
          const data = { steamid }
          const res: any = await getPreQuestion({});
          const resData: any = await getLimitCount(data)
          if (resData) {
            setCount(resData.data.count)
          }
          if (res) {
            savedQuestion(res.data.results);
          }
        } catch (error) {
          console.error("Error fetching QA:", error);
        }
      }
    };

    fetchQuestions();
  }, [savedQuestion, storedPlayer]);
  const handleClick = (id: string) => {
    const question = preQuestions[id]
    localStorage.setItem("storage-question", JSON.stringify(question));
    router.push(paths.dashboard.senseLearn.questionsAndAnswers.send(id));
  };
  const handleFreeQuestion = () => {
    if (!value.trim()) return;
    localStorage.setItem("storage-question", JSON.stringify({ question: value }));
    router.push(paths.dashboard.senseLearn.questionsAndAnswers.send('free-question'));
  }

  return (
    <Container maxWidth="xl">
      <AppTitle title="Welcome to Sense Learn" />
      {user?.subscription?.toLowerCase() === "free" && <UpgradeBox count={count} />}
      <Box
        gap={2}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        sx={{ mt: 10 }}
      >
        {preQuestions?.map((item: any, index: number) => (
          <QuestionBox
            type="question"
            text={item.question}
            onClick={() => handleClick(`${index}`)}
          />
        ))}
      </Box>
      <MessageBox value={value} onChange={handleChange} sx={{ pt: 5 }} onSend={() => handleFreeQuestion()} />
    </Container>
  );
}
