'use client';

// @mui
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
import { MessageBox, QuestionBox, UpgradeBox } from '../components';
import { useEffect } from 'react';
import { getPreQuestion } from 'src/helper/api_steam_helper';

// ----------------------------------------------------------------------

export default function QuestionsAndAnswersView() {
  const { user } = useAuthUser();
  const router = useRouter();
  const preQuestions = usePreQuestion((state) => state.resData);
  const savedQuestion = usePreQuestion((state) => state.saveQuestion)
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // await savePreQuestion({ data })
        const res: any = await getPreQuestion();
        if (res) {
          savedQuestion(res.data.results); // ✅ Correctly update Zustand state
        }
      } catch (error) {
        console.error("Error fetching QA:", error);
      }
    };

    fetchQuestions(); // ✅ Call the async function inside useEffect
  }, []); // ✅ Added dependencies
  const handleClick = (id: string) => {
    router.push(paths.dashboard.senseLearn.questionsAndAnswers.send(id));
  };

  return (
    <Container maxWidth="xl">
      <AppTitle title="Welcome to Sense Learn" />
      {user?.subscription === "free" && <UpgradeBox sx={{}} />}
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
