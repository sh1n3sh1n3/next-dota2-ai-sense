import React from 'react';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

interface MatchIDProps extends BoxProps {}

export default function MatchBox({ children, sx, ...other }: MatchIDProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 2.5,
        width: 1,
        maxWidth: '553px',
        position: 'relative',
        border: 'solid 2px #F3F4F6FF',
        borderRadius: '16px 16px 0px 16px',
        bgcolor: alpha(theme.palette.primary.main, 0.1),
        ...sx,
        ...other,
      }}
    >
      {children}
    </Box>
  );
}
