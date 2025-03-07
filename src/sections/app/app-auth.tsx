// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Avatar, Card } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
// routes
import { paths } from 'src/routes/paths';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// layouts
import { HEADER } from 'src/layouts/config-layout';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { RouterLink } from 'src/routes/components';
import {
  Box1,
  Box2,
  Box3,
  CatBox,
  LikeBox,
  ArrowBox,
  BrushBox,
  OvalCircleBox,
  OvalHalfCircleBox,
} from '../sense-learn/components/absolute-box';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  height: '100%',
  [theme.breakpoints.down('md')]: {
    marginTop: HEADER.H_DESKTOP_OFFSET,
    paddingBottom: HEADER.H_DESKTOP_OFFSET,
  },
}));

// ----------------------------------------------------------------------

export default function HomeAuth() {
  const mdUp = useResponsive('up', 'md');
  const SignIn = () => {
    const params = new URLSearchParams({
      'openid.ns': 'http://specs.openid.net/auth/2.0',
      'openid.mode': 'checkid_setup',
      'openid.return_to': 'https://next-dota2-ai-sense.vercel.app/auth/register',
      'openid.realm': 'https://next-dota2-ai-sense.vercel.app/',
      'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
      'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select',
    });
    window.location.href = `https://steamcommunity.com/openid/login?${params.toString()}`;
  }

  return (
    <StyledRoot>
      <Container maxWidth="xl" sx={{ height: 1 }}>
        <Stack
          sx={{ width: 1, height: 1 }}
          spacing={{ xs: 8, md: 0 }}
          alignItems="center"
          justifyContent="space-around"
          direction={{ xs: 'column', md: 'row' }}
        >
          {mdUp && (
            <Stack
              spacing={{ xs: 8, md: 0 }}
              alignItems="flex-end"
              justifyContent="space-around"
              sx={{ height: 1, maxHeight: '472px' }}
            >
              <Stack alignItems="center">
                <Iconify width={36} icon="mdi:code" sx={{ color: '#615151FF' }} />
              </Stack>
              <Stack spacing={1} direction="row">
                <Avatar src="/assets/images/woman1.jpg" />
                <Box1 text="Hi !! Just ask you one" />
              </Stack>
              <Stack spacing={1} direction="row">
                <Avatar src="/assets/images/woman2.jpg" />
                <Box2 text="Cupidatat sit qui cillum velit laboris sint" />
              </Stack>
              <Stack spacing={2} direction="row">
                <LikeBox />
                <Stack spacing={1.4} direction="row" alignItems="flex-end">
                  <Image
                    src="/assets/images/avatar.jpg"
                    sx={{ borderRadius: '10px', bgcolor: 'primary.main' }}
                  />
                  <Box sx={{ mb: -1.4 }}>
                    <OvalCircleBox />
                  </Box>
                </Stack>
                <ArrowBox />
              </Stack>
            </Stack>
          )}
          <Stack justifyContent="center" sx={{ height: 1 }}>
            <Card
              sx={{
                mx: 'auto',
                minWidth: 300,
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
                <Box
                  alt="alt"
                  component="img"
                  src="/assets/images/logo.svg"
                  sx={{ mx: 'auto', width: '105px', height: '90px' }}
                />

                <Typography
                  variant="h3"
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  Dota 2 AISense
                </Typography>

                <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                  To continue, kindly log in with your account
                </Typography>

                <Stack spacing={1.5} sx={{ width: 1 }}>
                  <Button
                    fullWidth
                    component={RouterLink}
                    href={paths.auth.steam.register}
                    color="primary"
                    size="large"
                    variant="contained"
                  >
                    Sign up
                  </Button>

                  <Button
                    fullWidth
                    // component={RouterLink}
                    onClick={SignIn}
                    // href={paths.auth.steam.login}
                    color="inherit"
                    size="large"
                    sx={{ borderColor: 'text.primary' }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Card>
          </Stack>

          {mdUp && (
            <Stack
              spacing={{ xs: 8, md: 0 }}
              justifyContent="space-around"
              sx={{ height: 1, maxHeight: '472px', pt: 8 }}
            >
              <Box sx={{ position: 'relative' }}>
                <Box3 />
                <Box sx={{ zIndex: -1, position: 'absolute', top: -120, left: -259 }}>
                  <OvalHalfCircleBox />
                </Box>
              </Box>

              <CatBox />
              <Stack direction="column">
                <Stack direction="row" justifyContent="space-between">
                  <SvgColor
                    src="/assets/images/curve.svg"
                    sx={{ width: '102px', color: '#ff6a6a' }}
                  />
                  <BrushBox />
                </Stack>
                <Stack alignItems="flex-end" sx={{ pr: '88px' }}>
                  <Iconify width={24} icon="mdi:triangle-outline" sx={{ color: 'primary.main' }} />
                </Stack>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Container>
    </StyledRoot>
  );
}
