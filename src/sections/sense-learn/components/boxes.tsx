import React from 'react';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import {
  Box,
  Link,
  Stack,
  BoxProps,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// components
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

export type QuestionType = {
  icon?: boolean;
  text: string;
  onClick: () => void;
};

export function QuestionBox({ icon = false, text, onClick }: QuestionType) {
  return (
    <Stack>
      <Box
        sx={{
          height: '82px',
          cursor: 'pointer',
          borderRadius: '6px',
          border: 'solid 1px',
          borderColor: 'secondary.main',
          boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ pr: 2.5 }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              sx={{
                m: '6px',
                width: '88px',
                height: '70px',
                display: 'flex',
                borderRadius: '4px',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'secondary.main',
              }}
            >
              <Iconify width={24} height={24} icon="eva:arrow-ios-back-fill" />
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {text}
            </Typography>
          </Stack>

          <Iconify width={24} height={24} icon="eva:arrow-ios-back-fill" color="secondary.main" />
        </Stack>
      </Box>
    </Stack>
  );
}

export function QuestionBox2({ icon = false, text, onClick }: QuestionType) {
  return (
    <Box
      sx={{
        height: '82px',
        cursor: 'pointer',
        borderRadius: '6px',
        border: 'solid 1px',
        borderColor: '#F3F4F6',
        boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F',
      }}
      onClick={onClick}
    >
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pr: 2.5, height: 1 }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {icon && (
            <Box
              sx={{
                m: '6px',
                width: '88px',
                height: '70px',
                display: 'flex',
                borderRadius: '4px',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'primary.light',
              }}
            >
              <Iconify
                width={24}
                height={24}
                color="secondary.main"
                icon="eva:arrow-ios-back-fill"
              />
            </Box>
          )}
          <Typography variant="body2" sx={{ color: 'text.secondary', pl: 2 }}>
            {text}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export function UpgradeBox({ ...other }) {
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
        ...other,
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ width: 1 }}>
        <Typography variant="body2">You aready did 4/5 free chats available per day -</Typography>
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

interface SendBoxProps extends BoxProps {
  onSend: () => void;
}

export function SendBox({ onSend, sx, ...other }: SendBoxProps) {
  return (
    <Stack alignItems="center" sx={{ width: 1, ...other }}>
      <TextField
        fullWidth
        placeholder="Send your message"
        sx={{
          maxWidth: '800px',
          ...sx,
        }}
        InputProps={{
          endAdornment: (
            <Stack spacing="1" direction="row">
              <InputAdornment position="end">
                <SvgColor
                  src="/assets/images/microphone.svg"
                  sx={{ width: 24, height: 24, color: 'text.disabled' }}
                />
              </InputAdornment>
              <InputAdornment position="end">
                <IconButton onClick={onSend}>
                  <SvgColor src="/assets/images/send.svg" sx={{ width: 24, height: 24 }} />
                </IconButton>
              </InputAdornment>
            </Stack>
          ),
        }}
      />
    </Stack>
  );
}

interface MatchIDProps extends BoxProps {
  text: string;
}

export function MatchIDBox({ text, sx, ...other }: MatchIDProps) {
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
      <Typography variant="h6" sx={{ fontWeight: 400 }}>
        {text}
      </Typography>
    </Box>
  );
}

export function QueryBox({ children, sx, ...other }: BoxProps) {
  const theme = useTheme();

  return (
    <Stack spacing={1} direction="row">
      <SvgColor src="/assets/images/lightning.png" sx={{ width: 36, height: 36 }} />
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
        {children}
      </Box>
    </Stack>
  );
}
