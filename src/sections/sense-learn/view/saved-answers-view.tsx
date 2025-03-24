'use client';

import { useEffect, useRef } from 'react';
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
  const saveQAData = useQAStore((state) => state.saveQAData); // ✅ Extract Zustand function properly
  const saveQADataRef = useRef(saveQAData);
  const savedQA = useQAStore((state) => state.resData);
  useEffect(() => {
    const fetchQA = async () => {
      try {
        const storedPlayer = localStorage.getItem("user");
        if (!storedPlayer) return;

        const parsed = JSON.parse(storedPlayer);
        const steamid = parsed?.steamid;

        if (!steamid) return;

        const res: any = await getQA({ steamid });
        if (res?.data?.results) {
          saveQADataRef.current(res.data.results);
        }
      } catch (error) {
        console.error("Error fetching QA:", error);
      }
    };

    fetchQA();
  }, []);

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
