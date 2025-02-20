// @mui
import { Avatar, Box, BoxProps, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
// components
import SvgColor from 'src/components/svg-color';

const PADDING = {
  small: 1.5,
  medium: 1.8,
  large: 2.5,
};

export function Box1({ text }: { text: string }) {
  return (
    <Box sx={{ position: 'relative', maxWidth: '196px' }}>
      <Box
        sx={{
          p: PADDING.small,
          display: 'flex',
          textAlign: 'left',
          alignItems: 'center',
          background: ' #E0DADAFF',
          borderRadius: '0px 10px 10px 10px',
        }}
      >
        <Typography variant="body2">{text}</Typography>
        <Box
          sx={{
            top: '-45px',
            right: '-30px',
            width: '60px',
            height: '60px',
            position: 'absolute',
            borderRadius: '6px',
            background: ' #FF9696FF',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SvgColor
            src="/assets/images/light.svg"
            sx={{ width: 36, height: 36, color: 'secondary.main' }}
          />
        </Box>
      </Box>
    </Box>
  );
}

interface Box2Props extends BoxProps {
  text: string;
  children?: React.ReactNode;
}
export function Box2({ text, children }: Box2Props) {
  return (
    <Box
      sx={{
        position: 'relative',
        p: PADDING.small,
        textAlign: 'left',
        maxWidth: '295px',
        background: ' #E0DADAFF',
        borderRadius: '0px 6px 6px 6px',
        boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F',
      }}
    >
      <Stack spacing={4} direction="row">
        <Typography variant="body2">{text}</Typography>
        {children}
      </Stack>
    </Box>
  );
}

export function ArrowBox() {
  return (
    <Box
      component="img"
      src="/assets/images/arrow.svg"
      sx={{
        width: '125px',
        height: '60px',
        borderRadius: '0px',
        transform: 'scaleY(-1) rotate(-15deg)',
        filter: 'FlipV',
        color: 'primary.main',
      }}
    />
  );
}

export function Box3() {
  return (
    <Box sx={{ position: 'relative', maxWidth: '295px' }}>
      <Box
        sx={{
          p: PADDING.large,
          textAlign: 'left',
          alignItems: 'center',
          background: ' #E0DADAFF',
          borderRadius: '16px 16px 0px 16px',
          boxShadow: '0px 8px 17px #e0dada26, 0px 0px 2px #e0dada1F',
        }}
      >
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Stack spacing={1.4}>
            <Box
              sx={{
                width: '190px',
                height: '11px',
                borderRadius: '6px',
                background: ' #615151FF',
              }}
            />
            <Box
              sx={{
                width: '118px',
                height: '12px',
                borderRadius: '6px',
                background: ' #615151FF',
              }}
            />
          </Stack>

          <Avatar src="/assets/images/woman3.jpg" sx={{ width: 36, height: 36 }} />
        </Stack>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '-45px',
          left: '-30px',
          width: '60px',
          height: '60px',
          borderRadius: '6px',
          background: ' #C8BDBDFF',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SvgColor src="/assets/images/question.svg" sx={{ width: 36, height: 36 }} />
        <Box
          sx={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: 16,
            height: 16,
            borderRadius: '0px',
          }}
        >
          <SvgColor src="/assets/images/multiply.svg" sx={{ width: 16, height: 16 }} />
        </Box>
      </Box>
    </Box>
  );
}

export function CatBox() {
  return (
    <Box
      sx={{
        p: PADDING.large,
        maxWidth: '257px',
        textAlign: 'left',
        borderRadius: '4px',
        position: 'relative',
        background: ' #E0DADAFF',
        boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F',
      }}
    >
      <Box
        alignItems="center"
        justifyContent="center"
        sx={{
          position: 'absolute',
          width: 48,
          height: 48,
          top: '30px',
          left: '-35px',
          borderRadius: '24px',
          bgcolor: 'primary.main',
        }}
      >
        <Stack alignItems="center" justifyContent="center" sx={{ width: 1, height: 1 }}>
          <Iconify icon="arcticons:i-love-hue-too" width={26} sx={{ color: 'common.white' }} />
        </Stack>
      </Box>
      <Stack spacing={2}>
        <Typography variant="body1">Create a cool cat wallpaper</Typography>
        <Image src="/assets/images/cat.jpg" sx={{ borderRadius: '4px' }} />
      </Stack>
    </Box>
  );
}

export function BrushBox() {
  return (
    <Box
      sx={{
        width: '88px',
        height: '60px',
        borderRadius: '4px',
        bgcolor: 'secondary.main',
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ width: 1, height: 1 }}>
        <Iconify width={36} icon="hugeicons:paint-brush-01" sx={{ color: 'common.white' }} />
      </Stack>
    </Box>
  );
}

export function LikeBox() {
  return (
    <Box
      sx={{
        width: '50px',
        height: '50px',
        borderRadius: '6px',
        bgcolor: 'secondary.lighter',
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ width: 1, height: 1 }}>
        <SvgColor src="/assets/images/like.svg" sx={{ width: 30, color: 'secondary.main' }} />
      </Stack>
    </Box>
  );
}

export function OvalCircleBox() {
  return (
    <Box
      sx={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: 'solid 3px',
        bgcolor: 'common.white',
        borderColor: 'secondary.main',
      }}
    />
  );
}

export function OvalHalfCircleBox() {
  return (
    <Box
      sx={{
        width: '256px',
        height: '280px',
        borderRadius: '50%',
        transform: 'rotate(90deg)',
        background:
          'linear-gradient(90deg, white 50%, transparent 50%), linear-gradient(90deg, transparent 50%, #615151FF 50%)',
      }}
    />
  );
}
