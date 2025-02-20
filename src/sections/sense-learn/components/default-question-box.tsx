import React from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Stack, BoxProps, IconButton } from '@mui/material';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

export type QuestionType = {
  text: string;
  type?: 'question' | 'answer';
  onClick: () => void;
};

export default function DetaultQuestionBox({ children, sx, ...other }: BoxProps) {
  const theme = useTheme();

  return (
    <Stack spacing={1} direction="row">
      <Image src="/assets/images/lightning.png" sx={{ width: 36, height: 36 }} />
      <Box
        sx={{
          width: 1,
          position: 'relative',
          p: theme.spacing(1, 0, 3, 2),
          border: 'solid 2px #F3F4F6FF',
          borderRadius: '0px 16px 16px 16px',
          ...sx,
          ...other,
        }}
      >
        <Stack>
          {children}

          <Box
            sx={{
              zIndex: 100,
              bottom: -16,
              right: { xs: 0, md: -20 },
              height: '32px',
              bgcolor: '#F3F4F6',
              borderRadius: '6px',
              position: 'absolute',
              border: 'solid 2px #FFFFFFFF',
            }}
          >
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: 1, py: 0.5 }}
            >
              <IconButton sx={{ p: 0 }}>
                <Iconify icon="solar:download-linear" width={17} sx={{ color: 'text.disabled' }} />
              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <Iconify icon="iconamoon:like" width={17} sx={{ color: 'text.disabled' }} />
              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <Iconify icon="iconamoon:dislike" width={17} sx={{ color: 'text.disabled' }} />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}
