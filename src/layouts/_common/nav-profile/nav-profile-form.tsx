import * as Yup from 'yup';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Stack, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// assets
import { countries } from 'src/assets/data';

import { useAuthUser } from 'src/hooks/use-auth';
import { updateProfile } from 'src/helper/api_auth_helper';
import { useAuthContext } from 'src/auth/hooks';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';
//

// ----------------------------------------------------------------------

type Props = {
  onClose: () => void;
};

function NavProfileForm({ onClose }: Props) {
  const { user } = useAuthUser();
  const { initialize, login } = useAuthContext();
  const [player, setPlayer] = useState<any>("")
  useEffect(() => {
    const storedPlayer = localStorage.getItem("user");
    if (storedPlayer) {
      const result = JSON.parse(storedPlayer);
      setPlayer(result)
    }
  }, [])


  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    country: Yup.string().required('Country is required'),
  });

  const defaultValues = useMemo(
    () => ({
      name: player?.personaname || '',
      email: user?.email || '',
      country: player?.country || '',
    }),
    [player, user]
  );

  const methods = useForm({
    // resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (player) {
      reset({
        name: player?.personaname || '',
        email: user?.email || '',
        country: countries.find((item) => item.code === player.loccountrycode)?.label || '',
      });
    }
  }, [player, user, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const steamid = player.steamid;
      if (steamid) {
        await updateProfile({ email: data.email, steamid })
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
                Edit profile
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
                <Image src={player?.avatarfull} sx={{ width: 1, height: 1 }} />
              </Box>
            </Stack>

            <RHFTextField fullWidth name="name" label="Steam nick name" readOnly />
            <RHFTextField name="email" label="Email" />

            <RHFAutocomplete
              name="country"
              label="Location"
              placeholder="-Select your country-"
              options={countries.map((country) => country.label)}
              getOptionLabel={(option) => option}
              renderOption={(props, option) => {
                const { code, label, phone } = countries.filter(
                  (country) => country.label === option
                )[0];

                if (!label) {
                  return null;
                }

                return (
                  <li {...props} key={label}>
                    <Iconify
                      key={label}
                      icon={`circle-flags:${code.toLowerCase()}`}
                      width={28}
                      sx={{ mr: 1 }}
                    />
                    {label} ({code}) +{phone}
                  </li>
                );
              }}
              disabled
            />
          </Box>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button color="inherit" onClick={onClose}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Cancel
          </Typography>
        </Button>

        <LoadingButton type="submit" variant="contained" color="primary" loading={isSubmitting}>
          <Typography variant="body2">Save profile</Typography>
        </LoadingButton>
      </DialogActions>
    </FormProvider>
  );
}

export default NavProfileForm;
