// @mui
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Typography variant="caption" component="div">
          StormBot may produce inaccurate information about people, places, or fact.
          <Link href="https://dota2@ai.com/" sx={{ typography: 'caption', fontWeight: 600 }}>
            {' '}
            Privacy Notice{' '}
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
