// @mui
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';
//
import { HEADER } from '../config-layout';

// ----------------------------------------------------------------------

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        pb: 4,
        width: 1,
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: HEADER.H_DESKTOP,
        bgcolor: 'background.default',
      }}
    >
      <Typography variant="caption" component="div">
        StormBot may produce inaccurate information about people, places, or fact.
        <Link href="https://dota2@ai.com/" sx={{ typography: 'caption', fontWeight: 600 }}>
          {' '}
          Privacy Notice{' '}
        </Link>
      </Typography>
    </Box>
  );
}
