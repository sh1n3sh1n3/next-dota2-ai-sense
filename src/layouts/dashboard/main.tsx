// @mui
import { Stack } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
//
import { /* HEADER, */ NAV } from '../config-layout';
import Footer from './footer';

// ----------------------------------------------------------------------

// const SPACING = 8;

export default function Main({ children, sx, ...other }: BoxProps) {
  const lgUp = useResponsive('up', 'lg');

  return (
    <Stack alignItems="center" sx={{ width: 1 }}>
      <Box
        component="main"
        sx={{
          overflowY: 'auto',
          flexGrow: 1,
          minHeight: 1,
          display: 'flex',
          flexDirection: 'column',
          // py: `${HEADER.H_MOBILE + SPACING}px`,
          ...(lgUp && {
            px: 2,
            // py: `${HEADER.H_DESKTOP + SPACING}px`,
            width: `calc(100% - ${NAV.W_VERTICAL}px)`,
          }),
          ...sx,
        }}
        {...other}
      >
        {children}
      </Box>

      <Footer />
    </Stack>
  );
}
