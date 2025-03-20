'use client';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// _mock
import { _userPlans } from 'src/_mock';
// hooks
import { useAuthUser } from 'src/hooks/use-auth';
// components
import AppTitle from 'src/components/app-title';
//
import PricingCard from './pricing-card';

// ----------------------------------------------------------------------
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default function PricingView() {
  const { user } = useAuthUser();

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
        {_userPlans.map((plan, index) => (
          <Elements stripe={stripePromise}>
            <PricingCard
              key={plan.subscription}
              plan={plan}
              active={plan.subscription.toLowerCase() === user?.subscription?.toLowerCase()}
              currentPlan={user?.subscription}
            // active={plan.subscription.toLowerCase() === "learn"}
            // currentPlan="learn"
            />
          </Elements>
        ))}
      </Box>
    </Container>
  );
}
