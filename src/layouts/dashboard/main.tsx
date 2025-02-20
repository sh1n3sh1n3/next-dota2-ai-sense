// @mui
import Box, { BoxProps } from '@mui/material/Box';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
//
import Footer from './footer';
import { HEADER, NAV } from '../config-layout';

// ----------------------------------------------------------------------

const SPACING = 0;

export default function Main({ children, sx, ...other }: BoxProps) {
  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        pt: mdUp ? 0 : `${HEADER.H_MOBILE + SPACING}px`,
        ...(mdUp && {
          px: 2,
          py: mdUp ? 0 : `${HEADER.H_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.W_VERTICAL}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
        {children}

        <Footer />
    </Box>
  );
}
