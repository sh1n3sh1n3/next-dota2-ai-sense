'use client';

// @mui
import Container from '@mui/material/Container';
// components
import AppHeader from 'src/components/app-header';
// assets
import { Box } from '@mui/material';
import { QuestionBox2 } from '../components/boxes';
//

// ----------------------------------------------------------------------

const answers = [
  { text: 'Analyze my match using the Match ID' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
  { text: 'Which items would be most recommended for this Match ID?' },
];

export default function SavedAnswersView() {
  return (
    <Container maxWidth="xl">
      <AppHeader title="Saved answers" />
      <Box
        gap={2}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        sx={{ p: 2 }}
      >
        <QuestionBox2 text="Analyze my match using the Match ID" onClick={() => console.log()} />
        {answers.map((answer, index) => (
          <QuestionBox2 text={answer.text} onClick={() => console.log()} />
        ))}
      </Box>
    </Container>
  );
}
