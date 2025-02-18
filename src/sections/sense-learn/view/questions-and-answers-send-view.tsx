'use client';

import { useState } from 'react';
// @mui
import Container from '@mui/material/Container';
import { Box, IconButton, Stack, Typography } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import AppHeader from 'src/components/app-header';
//
import { SendBox, QueryBox, MatchIDBox } from '../components/boxes';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function QuestionsAndAnswersSendView({ id }: Props) {
  const [result, setResult] = useState('');

  const handleSend = () => {
    setResult(`Match Analysis - ID [Match ID]
    Your Performance Overview
    Hero Played: [Hero X]
    Team Composition: [Hero 1, Hero 2, Hero 3, Hero 4, Hero 5]
    XPM: [X] | GPM: [Y] | KDA: [1/1/10]
    Item Build Used: [Item 1, Item 2, Item 3, Item 4]
    Lane Matchup: You laned against [Enemy Hero X]
    1. Early Game Recommendations
    Optimal Starting Items: Based on statistical trends, the best starting items against [Enemy Hero X] would be:
    [Item 1] (Reason)
    [Item 2] (Reason)
    [Item 3] (Reason)

    2. Mid-Game Itemization Suggestions
    Considering the enemy lineup, including [Enemy Hero 1] and [Enemy Hero 2], who deal high [physical/magical] damage, a more effective mid-game build would be:
    [Item 1] – (Reason: Counters enemy damage/sustain)
    [Item 2] – (Reason: Provides mobility/utility)
    [Item 3] – (Reason: Enhances survivability/damage)

    3. Macro & Playstyle Improvements
    Laning Phase: [Tips on positioning, harassing, or creep management]
    Objective Control: [When to push, rotate, or take fights]
    Farming Patterns: [How to maximize efficiency and avoid unnecessary risks]
    Team Fight Role: [What your hero’s ideal role should be in fights]

    4. Final Thoughts & Adjustments
    To further optimize your performance, consider:
    ✅ Alternative item choices depending on enemy scaling
    ✅ Adjusting lane approach to handle difficult matchups
    ✅ Better timing for rotations and map control`);
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
            <QueryBox>
              <Stack>
                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                  Analyze my match using the Match ID.
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                  Type your ID Match:
                </Typography>
              </Stack>

              <Box
                sx={{
                  zIndex: 100,
                  bottom: -16,
                  right: { xs: 0, md: -20 },
                  height: '32px',
                  bgcolor: '#F3F4F6',
                  borderRadius: '6px',
                  position: 'absolute',
                  border: 'solid 2px #FFFFFFFF',
                }}
              >
                <Stack
                  spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ px: 1, py: 0.5 }}
                >
                  <IconButton sx={{ p: 0 }}>
                    <Iconify
                      icon="solar:download-linear"
                      width={17}
                      sx={{ color: 'text.disabled' }}
                    />
                  </IconButton>
                  <IconButton sx={{ p: 0 }}>
                    <Iconify icon="iconamoon:like" width={17} sx={{ color: 'text.disabled' }} />
                  </IconButton>
                  <IconButton sx={{ p: 0 }}>
                    <Iconify icon="iconamoon:dislike" width={17} sx={{ color: 'text.disabled' }} />
                  </IconButton>
                </Stack>
              </Box>
            </QueryBox>
          </Stack>
          <MatchIDBox text="123456" />

          {result && (
            <QueryBox>
              <Typography sx={{ fontSize: '10px' }}>{result}</Typography>
            </QueryBox>
          )}
        </Stack>
        <SendBox onSend={handleSend} sx={{ py: 5 }} />
      </Stack>
    </Container>
  );
}
