'use client';

// @mui
import Container from '@mui/material/Container';
// _mock
import { _answers } from 'src/_mock';
// components
import AppHeader from 'src/components/app-header';
// assets
import { Box } from '@mui/material';
import { QuestionBox } from '../components';

// ----------------------------------------------------------------------

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
        {_answers.map((answer) => (
          <QuestionBox type="answer" text={answer.text} onClick={() => console.log()} />
        ))}
      </Box>
    </Container>
  );
}
