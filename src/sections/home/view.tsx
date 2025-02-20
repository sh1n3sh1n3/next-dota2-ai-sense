'use client';

// @mui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// hook
// components
import AppTitle from 'src/components/app-title';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid xs={12} md={12}>
          <AppTitle title="Welcome to Dota 2 AI Sense" />
        </Grid>
      </Grid>
    </Container>
  );
}
