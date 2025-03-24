'use client';

// React
import { useEffect, useState } from 'react';

// MUI
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

// _mock
import { _questions } from 'src/_mock';

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


// ----------------------------------------------------------------------

export default function QuestionsAndAnswersView() {
  const { user } = useAuthUser();
  const router = useRouter();
  const preQuestions = usePreQuestion((state) => state.resData);
  const savedQuestion = usePreQuestion((state) => state.saveQuestion)
  const [count, setCount] = useState<number>(0);
  const storedPlayer = localStorage.getItem("user");
  useEffect(() => {
    const fetchQuestions = async () => {
      if (storedPlayer) {
        try {
          // await savePreQuestion({ data })
          const { steamid } = JSON.parse(storedPlayer);
          const res: any = await getPreQuestion();
          const data = { steamid }
          const resData: any = await getLimitCount(data)
          if (resData) {
            setCount(resData.data.count)
          }
          if (res) {
            savedQuestion(res.data.results); // ✅ Correctly update Zustand state
          }
        } catch (error) {
          console.error("Error fetching QA:", error);
        }
      }
    };

    fetchQuestions(); // ✅ Call the async function inside useEffect
  }, [savedQuestion, storedPlayer]); // ✅ Added dependencies
  const handleClick = (id: string) => {
    router.push(paths.dashboard.senseLearn.questionsAndAnswers.send(id));
  };

  return (
    <Container maxWidth="xl">
      <AppTitle title="Welcome to Sense Learn" />
      {user?.subscription.toLowerCase() === "free" && <UpgradeBox count={count} />}
      <Box
        gap={2}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        sx={{ mt: 10 }}
      >
        {preQuestions.map((item: any, index: number) => (
          <QuestionBox
            type="question"
            text={item.question}
            onClick={() => handleClick(`${index}`)}
          />
        ))}
      </Box>
      <MessageBox sx={{ pt: 5 }} onSend={() => ''} />
    </Container>
  );
}
