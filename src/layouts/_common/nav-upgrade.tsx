// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Card, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// locales
import { useLocales } from 'src/locales';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
// components

// ----------------------------------------------------------------------

export default function NavUpgrade() {
  const { t } = useLocales();

  return (
    <Stack
      sx={{
        textAlign: 'center',
      }}
    >
      <Card
        sx={{
          p: 2,
          borderRadius: '6px',
          borderColor: '#FF9696FF',
          boxShadow: 'box-shadow: 0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F',
        }}
      >
        <Stack spacing={2.5} alignItems="center">
          <Stack direction="row" justifyContent="space-between" sx={{ width: 1 }}>
            <Stack spacing={1} direction="row" alignItems="center">
              <Avatar />
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Emily
              </Typography>
            </Stack>
            <IconButton
              onClick={() => {}}
              sx={{
                color: 'action.disabled',
              }}
            >
              <SvgColor src="/assets/images/menu.svg" sx={{ width: 22, height: 22 }} />
            </IconButton>
          </Stack>

          <Button
            fullWidth
            size="large"
            color="secondary"
            component={RouterLink}
            href={paths.dashboard.pricing}
            sx={{ bgcolor: 'secondary.lighter', typography: 'caption' }}
            endIcon={
              <Iconify
                icon="eva:arrow-ios-forward-fill"
                width={16}
                height={16}
                sx={{ color: 'secondary.main' }}
              />
            }
          >
            {t('upgrade_to_pro')}
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
}
