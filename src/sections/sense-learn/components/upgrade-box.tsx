import React from 'react';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import {
  Box,
  Link,
  Stack,
  Typography,
} from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

interface UpgradeBoxProps {
  count: number
}

export default function UpgradeBox({ count }: UpgradeBoxProps) {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        p: 0.5,
        mt: { xs: 2, md: 0 },
        bgcolor: alpha(theme.palette.warning.main, 0.2),
        // ...other,
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ width: 1 }}>
        <Typography variant="body2">You already did {count}/30 free chats available per month -</Typography>
      </Stack>
      <Box
        sx={{
          mr: 1.5,
          my: 0.5,
          width: '161px',
          height: '22px',
          display: 'flex',
          borderRadius: '6px',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: alpha(theme.palette.secondary.main, 0.44),
        }}
      >
        <Link
          href={paths.dashboard.pricing}
          component={RouterLink}
          color="common.white"
          variant="body2"
          sx={{ typography: 'subtitle2', underline: 'none' }}
        >
          Upgrade now
        </Link>
      </Box>
    </Stack>
  );
}
