import * as Yup from 'yup';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { useAuthUser } from 'src/hooks/use-auth';
import { useAuthContext } from 'src/auth/hooks';
// components
import Image from 'src/components/image';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { cancelPlan } from 'src/helper/api_plan_helper';
//

// ----------------------------------------------------------------------

const currentPlan = {
  due: '8 january 2025',
  billing: 'FREE',
  plan: 'Learn',
};

type Props = {
  onClose: () => void;
};

function NavPlanForm({ onClose }: Props) {
  const { user } = useAuthUser();
  const { initialize, login } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const [player, setPlayer] = useState<any>("")
  useEffect(() => {
    const storedPlayer = localStorage.getItem("user");
    if (storedPlayer) {
      const result = JSON.parse(storedPlayer);
      setPlayer(result)
    }
  }, [])

  const NewUserSchema = Yup.object().shape({
    due: Yup.string().required('Date is required'),
    billing: Yup.string().required('Billing is required'),
    plan: Yup.string().required('Plan is required'),
  });

  const defaultValues = useMemo(
    () => ({
      due: currentPlan?.due || '',
      billing: user?.subscription?.toLowerCase() === "free" ? "FREE" : "PRICE($19)",
      plan: user?.subscription || '',
    }),
    [user]
  );

  const active = user?.subscription?.toLowerCase() === "free";
  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const steamid = player.steamid;
      if (steamid) {
        await cancelPlan({ steamid })
        reset();
        enqueueSnackbar('Update success!');
        // await initialize();
        await login(steamid);
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <DialogContent>
        <Stack spacing={6} direction="row">
          <Box
            rowGap={1}
            columnGap={1}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(1, 1fr)',
            }}
            sx={{ width: 1, pt: 3 }}
          >
            <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
              <Typography variant="h3" sx={{ pb: 6.5 }}>
                Plan information
              </Typography>
              <Box
                sx={{
                  width: '104px',
                  height: '104px',
                  overflow: 'hidden',
                  borderRadius: '10px',
                  bgcolor: 'secondary.main',
                }}
              >
                <Image src={player.avatarfull} sx={{ width: 1, height: 1 }} />
              </Box>
            </Stack>

            <RHFTextField name="due" label="DotaSense member since" readOnly />
            <RHFTextField name="billing" label="Billing" readOnly />
            <RHFTextField name="plan" label="Plan" readOnly />
          </Box>
        </Stack>
      </DialogContent>

      <DialogActions>
        {/* <Button color="inherit" onClick={onClose}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Cancel
          </Typography>
        </Button> */}

        <LoadingButton type="submit" variant="contained" color="primary" loading={isSubmitting} disabled={active}>
          <Typography variant="body2">Cancel my plan</Typography>
        </LoadingButton>
      </DialogActions>
    </FormProvider>
  );
}

export default NavPlanForm;
