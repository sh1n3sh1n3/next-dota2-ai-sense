'use client';

// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import AppTitle from 'src/components/app-title';
//
import PricingCard from './pricing-card';

// ----------------------------------------------------------------------

export const _pricingPlans = [
  {
    subscription: 'free',
    price: 0,
    caption: 'To discovery the tool',
    period: '/month',
    description: 'Free forever',
    lists: ['3 Prototypes', '3 Boards', 'Up To 5 Team Members'],
    labelAction: 'Your current Plan',
  },
  {
    subscription: 'learn',
    price: 19,
    caption: 'Enhanced AI functionalities',
    period: '/team/month',
    description: 'Monthly subscription per user',
    lists: ['5 chats per day', '30 days history', 'Limited interactions'],
    labelAction: 'Upgrade',
  },
  {
    subscription: 'learn_realtime',
    price: 49,
    caption: 'Player like a pro',
    period: '/month',
    description: 'Elite VIP Experience: Exclusive per user',
    lists: ['Collaboration features', 'Smart analytics', 'Enterprise-level support'],
    labelAction: 'Upgrade',
  },
];

export default function PricingView() {
  return (
    <Container maxWidth="lg">
      <AppTitle title="Sense Real Time - Comming soon" />
      <Typography variant="h3" align="center" sx={{ mt: 4.5, mb: 4, color: '#323743' }}>
        Our plans
      </Typography>
      <Box
        gap={{ xs: 3, md: 0 }}
        display="grid"
        alignItems={{ md: 'center' }}
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      >
        {_pricingPlans.map((card, index) => (
          <PricingCard key={card.subscription} card={card} index={index} />
        ))}
      </Box>
    </Container>
  );
}
