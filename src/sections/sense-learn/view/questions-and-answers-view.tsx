'use client';

// @mui
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// components
import AppTitle from 'src/components/app-title';
import { QuestionBox, QuestionBox2, SendBox, UpgradeBox } from '../components/boxes';
//

// ----------------------------------------------------------------------

const questions = [
  { text: 'Analyze my match using the Match ID' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
];

export default function QuestionsAndAnswersView() {
  const router = useRouter();

  const hasPlan = false;

  const handleClick = (id: string) => {
    router.push(paths.dashboard.senseLearn.questionsAndAnswers.send(id));
  };

  return (
    <Container maxWidth="lg">
      <AppTitle title="Welcome to Sense Learn" />
      {!hasPlan && <UpgradeBox sx={{}} />}
      <Box
        gap={2}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr), md: repeat(2, 1fr)' }}
        sx={{ mt: 10 }}
      >
        <QuestionBox text="Analyze my match using the Match ID" onClick={() => handleClick('0')} />
        {questions.map((question, index) => (
          <QuestionBox2
            icon
            text={question.text}
            onClick={() => handleClick((index + 1).toString())}
          />
        ))}
      </Box>
      <SendBox sx={{ pt: 5 }} onSend={() => ''} />
    </Container>
  );
}
