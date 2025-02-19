'use client';

// @mui
import { Box, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// components
import Image from 'src/components/image';
import AppTitle from 'src/components/app-title';
//
import { Box1, Box2, Box3 } from '../components/absolute-box';

// ----------------------------------------------------------------------

export default function HowItworksView() {
  return (
    <Container maxWidth="lg">
      <AppTitle title="Sense Learn - How it works" />

      <Grid container spacing={{ xs: 12, md: 0 }} sx={{ mt: 12 }}>
        <Grid xs={12} md={6}>
          <Stack spacing={8} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Box1 text="Minim in in consecte222tur ut laboris magna" />
            <Box2 text="Cupidatat sit qui cillum velit laboris sint" />
          </Stack>
        </Grid>

        <Grid xs={12} md={6}>
          <Stack
            alignItems={{ xs: 'center', md: 'flex-end' }}
            justifyContent="flex-end"
            sx={{ height: 1 }}
          >
            <Box3 />
          </Stack>
        </Grid>
      </Grid>
      <Box
          sx={{
            position: 'absolute',
            width: '125px',
            height: '60px',
            borderRadius: '0px',
            transform: 'scale(-1)'
          }}
        >
          <Image src="/assets/images/how-it-works-arrow.svg" />,
        </Box>
    </Container>
  );
}
