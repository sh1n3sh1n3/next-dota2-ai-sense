// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
// routes
import { usePathname } from 'src/routes/hooks';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { bgBlur } from 'src/theme/css';
//
import NavMobile from './nav/mobile';
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
//
import { HeaderShadow } from '../_common';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();
  const pathname = usePathname();

  const isHome = pathname === '/';

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  if (!isHome) {
    return (
      <AppBar>
        <Toolbar
          disableGutters
          sx={{
            height: {
              xs: HEADER.H_MOBILE,
              md: HEADER.H_DESKTOP,
            },
            transition: theme.transitions.create(['height'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.shorter,
            }),
            ...(offsetTop && {
              ...bgBlur({
                color: theme.palette.background.default,
              }),
              height: {
                md: HEADER.H_DESKTOP_OFFSET,
              },
            }),
          }}
        >
          <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }} />

            <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
              {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
            </Stack>
          </Container>
        </Toolbar>

        {offsetTop && <HeaderShadow />}
      </AppBar>
    );
  }

  return null;
}
