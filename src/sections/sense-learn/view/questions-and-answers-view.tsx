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
import { MessageBox, QuestionBox, UpgradeBox } from '../components';

// ----------------------------------------------------------------------

export default function QuestionsAndAnswersView() {
  const { user } = useAuthUser();
  const router = useRouter();

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
        {_questions.map((question, index) => (
          <QuestionBox
            type="question"
            text={question.text}
            onClick={() => handleClick(`${index}`)}
          />
        ))}
      </Box>
      <MessageBox sx={{ pt: 5 }} onSend={() => ''} />
    </Container>
  );
}
