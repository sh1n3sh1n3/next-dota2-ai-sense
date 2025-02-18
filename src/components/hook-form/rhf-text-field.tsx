import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Stack, Typography } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  label?: string;
};

export default function RHFTextField({ name, label, helperText, type, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack>
          <Typography variant="subtitle2">{label}</Typography>
          <TextField
            {...field}
            fullWidth
            type={type}
            value={type === 'number' && field.value === 0 ? '' : field.value}
            onChange={(event) => {
              if (type === 'number') {
                field.onChange(Number(event.target.value));
              } else {
                field.onChange(event.target.value);
              }
            }}
            error={!!error}
            helperText={error ? error?.message : helperText}
            sx={{
              backgroundColor: '#F3F4F6', // Background color
              borderRadius: '6px', // Optional: Make it rounded
              '& .MuiOutlinedInput-root': {
                '& fieldset': { border: 'solid 1px transparent' }, // Remove outline
                '&:hover fieldset': {
                  border: 'solid 1px',
                  borderColor: 'text.disabled',
                }, // No border on hover
                '&.Mui-focused fieldset': {
                  border: 'solid 1px',
                  // bgcolor: 'common.white',
                  borderColor: 'text.disabled',
                }, // No border on focus
              },
            }}
            {...other}
          />
        </Stack>
      )}
    />
  );
}
