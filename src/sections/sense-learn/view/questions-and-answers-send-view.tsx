'use client';

import { useEffect, useRef, useState } from 'react';
// @mui
import Container from '@mui/material/Container';
import { Box, Stack, Typography } from '@mui/material';
// _mock
import { _answer, _questions, _questions_answers } from 'src/_mock';
// components
import AppHeader from 'src/components/app-header';
//
import { MatchBox, MessageBox, DetaultQuestionBox } from '../components';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function QuestionsAndAnswersSendView({ id }: Props) {
  const [value, setValue] = useState('');
  const [QA, setQA] = useState(_questions_answers);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const defaultQuestion = _questions.find((question) => question.id === id);

  // ✅ Scroll down function
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // ✅ Scroll down when messages change
  useEffect(() => {
    scrollToBottom();
  }, [QA]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSend = () => {
    if (!value) return;
    setQA([...QA, { type: 'question', text: value }, { type: 'answer', text: _answer }]);
    setValue('');
  };

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
            <DetaultQuestionBox>
              <Typography variant="h6" sx={{ fontWeight: 400 }}>
                {defaultQuestion?.text}
              </Typography>
            </DetaultQuestionBox>
          </Stack>

          {QA.map((item) => (
            <>
              {item.type === 'answer' ? (
                <DetaultQuestionBox>
                  <Typography variant="h6" sx={{ fontWeight: 400 }}>
                    {item.text}
                  </Typography>
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

        <MessageBox value={value} onChange={handleChange} onSend={handleSend} sx={{ py: 5 }} />
      </Stack>
    </Container>
  );
}
