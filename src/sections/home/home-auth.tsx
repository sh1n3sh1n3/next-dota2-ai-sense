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
  BrushBox,
  OvalTriangleBox,
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

  return (
    <StyledRoot>
      <Container maxWidth="xl" sx={{ height: 1 }}>
        <Stack
          sx={{ width: 1, height: 1 }}
          spacing={{ xs: 8, md: 2 }}
          alignItems="center"
          justifyContent="space-around"
          direction={{ xs: 'column', md: 'row' }}
        >
          {mdUp && (
            <Stack
              spacing={{ xs: 8, md: 0 }}
              justifyContent="space-around"
              sx={{ height: 1, maxHeight: '472px' }}
            >
              <Stack alignItems="center">
                <Iconify width={36} icon="mdi:code" sx={{ color: '#615151FF' }} />
              </Stack>
              <Stack spacing={1} direction="row">
                <Avatar />
                <Box1 text="Hi !! Just ask you one" />
              </Stack>
              <Stack spacing={1} direction="row">
                <Avatar />
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
                    <OvalTriangleBox />
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          )}
          <Stack justifyContent="center" sx={{ height: 1 }}>
            <Card
              sx={{
                // boxShadow: { md: 'none' },
                mx: 'auto',
                maxWidth: 560,
                textAlign: 'center',
                border: 'solid 2px',
                borderRadius: '16px',
                position: 'relative',
                borderColor: 'secondary.main',
                bgcolor: 'background.default',
                py: { xs: 2, md: 7 },
                px: { xs: 2, md: 14 },
                boxShadow: (theme) => ({
                  md: `-40px 40px 80px ${
                    theme.palette.mode === 'light'
                      ? alpha(theme.palette.grey[500], 0.16)
                      : alpha(theme.palette.common.black, 0.4)
                  }`,
                }),
              }}
            >
              {/* <Box sx={{ position: 'absolute', top: '100px', right: 0 }}>
              <OvalHalfCircleBox />
            </Box> */}
              <Stack spacing={5} alignItems="center" justifyContent="center">
                <Box
                  component="img"
                  src="/assets/images/logo.svg"
                  alt="alt"
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
                    href={paths.auth.steam.login}
                    color="primary"
                    size="large"
                    variant="contained"
                  >
                    Sign up
                  </Button>

                  <Button
                    fullWidth
                    component={RouterLink}
                    href={paths.auth.steam.login}
                    color="inherit"
                    size="large"
                    variant="outlined"
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
              <Box3 />
              <CatBox />
              <Stack direction="column">
                <Stack direction="row" justifyContent="space-between">
                  <SvgColor
                    src="/assets/images/curve.svg"
                    sx={{ width: '102px', color: 'secondary.main' }}
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
