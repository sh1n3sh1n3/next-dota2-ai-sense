import React from 'react';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import {
  Box,
  Stack,
  BoxProps,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  TextFieldProps,
} from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

type MessageBoxProps = TextFieldProps & {
  onSend: () => void;
};

export default function MessageBox({ onSend, ...other }: MessageBoxProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // ✅ Prevent new line if Shift isn't pressed
      onSend();
    }
  };

  return (
    <TextField
      fullWidth
      multiline
      placeholder="Send your message"
      sx={{
        maxWidth: '800px',
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
      onKeyDown={handleKeyDown}
      {...other}
    />
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
