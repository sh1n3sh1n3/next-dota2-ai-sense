import { useFormContext, Controller } from 'react-hook-form';
// @mui
import TextField from '@mui/material/TextField';
import { Stack, Typography } from '@mui/material';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';

// ----------------------------------------------------------------------

interface Props<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: React.ReactNode;
}

export default function RHFAutocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
>({
  name,
  label,
  placeholder,
  helperText,
  ...other
}: Omit<Props<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'>) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack>
          <Typography variant="subtitle2">{label}</Typography>
          <Autocomplete
            {...field}
            onChange={(event, newValue) => setValue(name, newValue, { shouldValidate: true })}
            renderInput={(params) => (
              <TextField
                // label={label}
                placeholder={placeholder}
                error={!!error}
                helperText={error ? error?.message : helperText}
                {...params}
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
              />
            )}
            {...other}
          />
        </Stack>
      )}
    />
  );
}
