'use client';

// layouts
import MainLayout from 'src/layouts/main';
//
import AppAuth from '../app-auth';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <MainLayout>
      <AppAuth />
    </MainLayout>
  );
}
