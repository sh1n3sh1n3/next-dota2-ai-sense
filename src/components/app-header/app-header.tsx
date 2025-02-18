// @mui
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  title?: string;
}

export default function AppHeader({ title, ...other }: Props) {
  return (
    <Stack
      alignItems="flex-start"
      sx={{
        pt: 3,
        height: '74px',
        borderBottom: 'solid 1px',
        borderColor: '#EAECF0',
      }}
      {...other}
    >
      <Typography variant="h4" sx={{ color: 'text.primary', fontFamily: 'Archivo' }}>
        {title}
      </Typography>
    </Stack>
  );
}
