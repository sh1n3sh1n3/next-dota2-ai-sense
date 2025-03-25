import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { CardProps } from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress, TextField, Dialog } from "@mui/material";
// hooks
import { cancelPlan, purchasePlan } from "src/helper/api_plan_helper";
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { ConfirmDialog } from "src/components/custom-dialog";
import { useSnackbar } from 'src/components/snackbar';
import { useAuthContext } from "src/auth/hooks";

// ----------------------------------------------------------------------

type Props = CardProps & {
  active: boolean;
  plan: {
    subscription: string;
    price: number;
    caption: string;
    period: string;
    description: string;
    // labelAction: string;
    lists: string[];
  };
  currentPlan?: string;
};

export default function PricingCard({ plan, active, currentPlan, sx, ...other }: Props) {
  const { subscription, price, caption, period, description, lists } = plan;
  // const { initialize, login } = useAuthContext();
  const { login } = useAuthContext();
  const storedPlayer = localStorage.getItem("user");
  const steamid = storedPlayer ? JSON.parse(storedPlayer)?.steamid : null; // Ensure steamid is accessible
  const { enqueueSnackbar } = useSnackbar();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false)
  const [cancelOpen, setCancelOpen] = useState<boolean>(false)
  const onClose = () => {
    setOpen(false)
  }
  const free = subscription === 'Free';

  const learn = subscription === 'Learn';

  const learn_realtime = subscription === 'Learn Real Time';

  let labelAction = "Downgrade";

  if (active) {
    labelAction = "Your current Plan";
  } else if (currentPlan?.toLowerCase() === "free") {
    labelAction = "Upgrade";
  } else if (currentPlan?.toLowerCase() === "learn") {
    labelAction = free ? "Downgrade" : "Upgrade";
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      enqueueSnackbar("Stripe is not initialized.", { variant: "error" });
      setLoading(false);
      return;
    }

    if (!steamid) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setLoading(false);
      return;
    }

    try {
      // Step 1: Create Payment Method
      const { paymentMethod, error: pmError } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (pmError) throw new Error(pmError.message);

      const data = {
        priceId: process.env.NEXT_PUBLIC_PRICE_ID,
        paymentMethodId: paymentMethod.id,
        email: email || null, // ✅ Send email only if customerId is unknown
        steamid
      }
      const response: any = await purchasePlan(data)

      const { clientSecret, customerId } = response.data;
      if (!clientSecret && customerId) throw new Error("Failed to create or update subscription");


      // Step 3: Confirm payment

      if (customerId) {
        const result = await stripe.confirmCardPayment(clientSecret);
        if (result.error) throw new Error(result.error.message);
      }
      await login(steamid);
      enqueueSnackbar("Payment successful!");
      setEmail("")
      setOpen(false)
      // router;
    } catch (err: any) {
      enqueueSnackbar("Payment failed.", { variant: "error" });
    } finally {
      setLoading(false);
    }


  };

  const handleSubscription = () => {
    if (free) {
      setCancelOpen(true)
    }
    else if (!learn_realtime) {
      setOpen(true)
    }
  }

  const handleCancelPlan = async () => {
    if (steamid) {
      try {
        await cancelPlan({ steamid })
        enqueueSnackbar("Update success!");
        // await initialize();
        await login(steamid);
      } catch (error) {
        enqueueSnackbar("No active subscription found!", { variant: "error" });
      }
      setCancelOpen(false)
    }
  }


  const renderList = (
    <Stack spacing={1}>
      {lists.map((item) => (
        <Stack
          key={item}
          direction="row"
          alignItems="center"
          sx={{
            typography: 'body2',
          }}
        >
          <Iconify
            icon="eva:checkmark-circle-2-outline"
            width={24}
            sx={{ mr: 1, color: 'success.main' }}
          />
          {item}
        </Stack>
      ))}
    </Stack>
  );

  return (
    <Stack
      sx={{
        p: 3,
        ...(active && {
          zIndex: 100,
          borderRadius: '6px',
          boxShadow: '0px 4px 9px #171a1f1C, 0px 0px 2px #171a1f1F',
        }),
        ...((!active) && {
          backgroundColor: '#F8F9FA',
          borderRadius: '6px 0px 0px 6px',
          boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F',
        }),
        ...sx,
      }}
      {...other}
    >
      <Stack spacing={2}>
        {/* subscriiption */}
        <Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h3" sx={{ textTransform: 'capitalize' }}>
              {subscription}
            </Typography>
            {learn && (
              <Label sx={{ px: 1.2, py: 1.5, bgcolor: 'secondary.light', borderRadius: '14px' }}>
                <Typography color="secondary" variant="caption">
                  Popular
                </Typography>
              </Label>
            )}
          </Stack>
          <Typography variant="body1" sx={{ color: '#424856FF' }}>
            {caption}
          </Typography>
        </Stack>

        {/* price */}
        <Stack direction="row">
          <>
            <Typography variant="h3">$</Typography>

            <Typography variant="h3" sx={{ fontSize: '40px' }}>
              {price}
            </Typography>
          </>

          {/* period */}
          <Typography
            component="span"
            sx={{
              color: 'text.disabled',
              ml: 1,
              typography: 'body2',
            }}
          >
            {period}
          </Typography>
        </Stack>

        {/* description */}
        <Typography
          component="span"
          sx={{
            color: 'text.disabled',
            ml: 1,
            typography: 'body2',
          }}
        >
          {description}
        </Typography>

        <Divider sx={{ borderStyle: 'dashed', color: '#DEE1E6FF' }} />

        {renderList}
      </Stack>

      <Button
        fullWidth
        size="large"
        variant={learn ? 'contained' : 'outlined'}
        color={learn ? 'primary' : 'inherit'}
        sx={{ mt: 4 }}
        disabled={active}
        onClick={() => handleSubscription()}
      >
        <Typography variant="body1">{labelAction}</Typography>
      </Button>

      <Dialog
        fullWidth
        maxWidth={false}
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: { maxWidth: 480 },
        }}
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2, margin: "auto", padding: 3, borderRadius: 2, boxShadow: 3 }}>
          {/* <Typography variant="h6" align="center"></Typography> */}

          <TextField
            id="email"
            label="Email Address"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <CardElement />
          <Button type="submit"

            size="large"
            variant='outlined'
            color='primary'
            sx={{ mt: 4 }}
            disabled={!stripe || loading}>
            {loading ? <CircularProgress size={24} /> : "Subscribe"}
          </Button>
        </Box>
      </Dialog>
      <ConfirmDialog
        title="Subscription"
        content={`Do you want to cancel your current ${currentPlan} Plan?`}
        action={
          <Button variant="outlined" color="inherit" onClick={handleCancelPlan}>
            Yes
          </Button>
        }
        open={cancelOpen}
        onClose={() => { setCancelOpen(false) }}
      />

      {/* </ConfirmDialog> */}
    </Stack>
  );
}
