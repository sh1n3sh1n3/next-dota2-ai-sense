'use client';

// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
// routes
import { useRouter } from 'src/routes/hooks';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// layouts
import { HEADER } from 'src/layouts/config-layout';
// hooks
import { useAuthContext } from 'src/auth/hooks';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  height: '100%',
  [theme.breakpoints.down('md')]: {
    marginTop: HEADER.H_DESKTOP_OFFSET,
    paddingBottom: HEADER.H_DESKTOP_OFFSET,
  },
}));

// ----------------------------------------------------------------------

export default function SteamRegisterView() {
  const { login } = useAuthContext();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const params: any = new URLSearchParams(window.location.search);

  const router = useRouter();

  const onSubmit = async () => {
    try {
      const claimedId = params.get('openid.claimed_id');
      if (claimedId) {
        const steamid = claimedId.split('/').pop();
        console.log("steamId", steamid);
        setIsSubmitting(true);
        await login(steamid);

        router.push(PATH_AFTER_LOGIN);
        setIsSubmitting(false);
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error(error)
    }
  };

  return (
    <StyledRoot>
      <Container maxWidth="xl" sx={{ height: 1 }}>
        <Stack justifyContent="center" sx={{ height: 1 }}>
          <Card
            sx={{
              // boxShadow: { md: 'none' },
              mx: 'auto',
              maxWidth: 600,
              minHeight: 472,
              textAlign: 'center',
              border: 'solid 2px',
              borderRadius: '16px',
              position: 'relative',
              borderColor: 'secondary.main',
              bgcolor: 'background.default',
              py: { xs: 2, md: 7 },
              px: { xs: 2, md: 14 },
              boxShadow: (theme) => ({
                md: `-40px 40px 80px ${theme.palette.mode === 'light'
                  ? alpha(theme.palette.grey[500], 0.16)
                  : alpha(theme.palette.common.black, 0.4)
                  }`,
              }),
            }}
          >
            <Stack spacing={5} alignItems="center" justifyContent="center">
              <Typography variant="h3" sx={{ textAlign: 'center' }}>
                Sign - up with yor Steam
              </Typography>

              <Typography variant="body1" sx={{ textAlign: 'left', color: 'text.secondary' }}>
                We need to login with you Steam user, to get information and statistics from Dota 2
                gameplays
              </Typography>

              <Box
                alt="alt"
                component="img"
                src="/assets/images/steam.png"
                sx={{ mx: 'auto', width: '311px', height: '74px' }}
              />

              <Stack sx={{ width: 1 }}>
                <LoadingButton fullWidth
                  color="primary"
                  size="large"
                  variant="contained"
                  onClick={onSubmit}
                  loading={isSubmitting}
                >
                  Continue
                </LoadingButton>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </StyledRoot>
  );
}
