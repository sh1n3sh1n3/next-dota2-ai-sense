'use client';

// @mui
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// components
import AppTitle from 'src/components/app-title';
//
import { ArrowBox, Box1, Box2, Box3 } from '../sense-learn/components/absolute-box';
//

// ----------------------------------------------------------------------

export default function HowToworksView() {
  const mdUp = useResponsive('up', 'md');
  
  return (
    <Container maxWidth="lg">
      <AppTitle title="Sense Learn - How it works" />

      <Stack
        spacing={{xs: 12, md: 4}}
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'center', md: 'flex-end' }}
        justifyContent="center"
        sx={{ mt: 12 ,}}
      >
        <Stack
          spacing={8}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          sx={{ pb: { xs: 0, md: 4 } }}
        >
          <Box1 text="Minim in in consectetur ut laboris magna " />
          <Box2 text="Cupidatat sit qui cillum velit laboris sint" />
        </Stack>
        {mdUp && (
          <Stack
            alignItems={{ xs: 'center', md: 'flex-end' }}
            justifyContent="flex-end"
            sx={{ height: 1 }}
          >
            <ArrowBox />
          </Stack>
        )}
        <Stack
          alignItems={{ xs: 'center', md: 'flex-end' }}
          justifyContent="flex-end"
          sx={{ height: 1, pb: { xs: 0, md: 4 } }}
        >
          <Box3 />
        </Stack>
      </Stack>
    </Container>
  );
}
