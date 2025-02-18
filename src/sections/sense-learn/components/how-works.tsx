// @mui
import { Box, Typography } from '@mui/material';
// layouts
import { NAV } from 'src/layouts/config-layout';
// components
import Image from 'src/components/image';
import SvgColor from 'src/components/svg-color';

export function HowWorks() {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          p: 1.5,
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: '216px',
          width: '196px',
          height: '68px',
          background: ' #E0DADAFF',
          left: `${383 - NAV.W_VERTICAL}px`,
          borderRadius: '0px 10px 10px 10px',
        }}
      >
        <Typography variant="body2">Minim in in consectetur ut laboris magna</Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '170px',
          left: `${549 - NAV.W_VERTICAL}px`,
          width: '60px',
          height: '60px',
          background: ' #FF9696FF',
          borderRadius: '6px',
        }}
      />
      <Box
        sx={{
          p: 1.5,
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: '338px',
          left: `${394 - NAV.W_VERTICAL}px`,
          width: '295px',
          height: '44px',
          background: ' #E0DADAFF',
          borderRadius: '0px 6px 6px 6px',
          boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F',
        }}
      >
        <Typography variant="body2">Cupidatat sit qui cillum velit laboris sint</Typography>
      </Box>
      <Box
        sx={{
          p: 1.5,
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: '295px',
          left: `${864 - NAV.W_VERTICAL}px`,
          width: '282px',
          height: '71px',
          background: ' #E0DADAFF',
          borderRadius: '16px 16px 0px 16px',
          boxShadow: '0px 8px 17px #e0dada26, 0px 0px 2px #e0dada1F',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '18px',
            left: '23px',
            width: '190px',
            height: '11px',
            background: ' #615151FF',
            borderRadius: '6px',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '42px',
            left: '23px',
            width: '118px',
            height: '12px',
            background: ' #615151FF',
            borderRadius: '6px',
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '247px',
          left: `${834 - NAV.W_VERTICAL}px`,
          width: '60px',
          height: '60px',
          background: ' #C8BDBDFF',
          borderRadius: '6px',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '231px',
          left: `${903 - NAV.W_VERTICAL}px`,
          width: '16px',
          height: '16px',
          borderRadius: '0px',
        }}
      >
        <SvgColor src="/assets/images/how-it-works-time.svg" />,
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '360px',
          left: `${714 - NAV.W_VERTICAL}px`,
          width: '125px',
          height: '60px',
          borderRadius: '0px',
          // transform: 'rotate(180deg)',
        }}
      >
        <Image src="/assets/images/how-it-works-arrow.svg" />,
      </Box>
    </Box>
  );
}
