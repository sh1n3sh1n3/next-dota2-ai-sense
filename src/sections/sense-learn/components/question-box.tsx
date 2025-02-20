import React from 'react';
// @mui
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import SvgColor from 'src/components/svg-color';

export type QuestionType = {
  text: string;
  type?: 'question' | 'answer';
  onClick: () => void;
};

export default function QuestionBox({ text, type = 'question', onClick }: QuestionType) {
  const hover = useBoolean();

  return (
    <Box
      sx={{
        height: '82px',
        cursor: 'pointer',
        borderRadius: '6px',
        border: 'solid 1px',
        borderColor: '#F3F4F6',
        '&:hover': {
          border: 'solid 1px',
          borderColor: 'secondary.main',
          boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F',
        },
      }}
      onClick={onClick}
      onMouseOver={hover.onTrue}
      onMouseLeave={hover.onFalse}
    >
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pr: 2.5, height: 1 }}
      >
        <Stack direction="row" alignItems="center" sx={{ height: 1 }}>
          {type === 'question' || hover.value ? (
            <Box
              sx={{
                m: '6px',
                width: '88px',
                height: '70px',
                display: 'flex',
                borderRadius: '4px',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: hover.value ? 'secondary.main' : 'primary.light',
              }}
            >
              {hover.value ? (
                <SvgColor
                  src="/assets/images/brush.svg"
                  sx={{ width: 24, color: 'common.white' }}
                />
              ) : (
                <SvgColor
                  src="/assets/images/question.svg"
                  sx={{ width: 24, color: 'primary.secondary' }}
                />
              )}
            </Box>
          ) : null}
          <Typography variant="body2" sx={{ pl: 2, color: 'text.secondary' }}>
            {text}
          </Typography>
        </Stack>

        {hover.value && (
          <SvgColor
            src="/assets/images/arrow_left.svg"
            sx={{ width: 24, color: 'secondary.main' }}
          />
        )}
      </Stack>
    </Box>
  );
}
