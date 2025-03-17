'use client';

import { useEffect } from 'react';
// @mui
import Container from '@mui/material/Container';
// _mock
// import { _answers } from 'src/_mock';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// hooks
// import { useAuthUser } from 'src/hooks/use-auth';
// components
import AppHeader from 'src/components/app-header';
// store
import { useQAStore } from 'src/store/qa.store';
// api
import { getQA } from 'src/helper/api_steam_helper';
// assets
import { Box } from '@mui/material';
import { QuestionBox } from '../components';

// ----------------------------------------------------------------------

export default function SavedAnswersView() {
  // const { user } = useAuthUser();
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(paths.dashboard.senseLearn.savedAnswers.send(id));
  };
  const storedPlayer = localStorage.getItem("user");
  const saveQAData = useQAStore((state) => state.saveQAData); // ✅ Extract Zustand function properly
  const savedQA = useQAStore((state) => state.resData);
  useEffect(() => {
    const fetchQA = async () => {
      if (storedPlayer) {
        const { steamid } = JSON.parse(storedPlayer);
        try {
          const res: any = await getQA({ steamid });
          if (res) {
            saveQAData(res.data.results); // ✅ Correctly update Zustand state
          }
        } catch (error) {
          console.error("Error fetching QA:", error);
        }
      }
    };

    fetchQA(); // ✅ Call the async function inside useEffect
  }, [storedPlayer, saveQAData]); // ✅ Added dependencies

  return (
    <Container maxWidth="xl">
      <AppHeader title="Saved answers" />
      <Box
        gap={2}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        sx={{ p: 2 }}
      >
        {savedQA?.map((item: any, index: any) => (
          <QuestionBox type="answer" text={item.messages[0].text} onClick={() => handleClick(`${index}`)} key={index} />
        ))}
      </Box>
    </Container>
  );
}
