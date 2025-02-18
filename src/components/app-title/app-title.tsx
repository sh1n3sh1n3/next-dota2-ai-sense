// @mui
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  title?: string;
}

export default function AppTitle({ title, ...other }: Props) {
  const lgUp = useResponsive('up', 'lg');

  return (
    <Stack
      alignItems="center"
      sx={{
        pt: lgUp ? 6 : 0,
        backgroundColor: 'common.white',
      }}
      {...other}
    >
      <Stack
        flexGrow={1}
        justifyContent="center"
        alignItems={{ xs: 'center', md: 'flex-start' }}
        sx={{
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography variant="h2" sx={{ color: 'primary.main', fontFamily: 'Archivo' }}>
          {title}
        </Typography>
      </Stack>
    </Stack>
  );
}
