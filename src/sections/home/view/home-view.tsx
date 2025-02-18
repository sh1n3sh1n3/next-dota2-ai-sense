'use client';

// layouts
import MainLayout from 'src/layouts/main';
//
import HomeAuth from '../home-auth';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <MainLayout>
      <HomeAuth />
    </MainLayout>
  );
}
