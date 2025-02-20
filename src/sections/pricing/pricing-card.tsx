// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { CardProps } from '@mui/material/Card';
import Typography from '@mui/material/Typography';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = CardProps & {
  active: boolean;
  plan: {
    subscription: string;
    price: number;
    caption: string;
    period: string;
    description: string;
    labelAction: string;
    lists: string[];
  };
};

export default function PricingCard({ plan, active, sx, ...other }: Props) {
  const { subscription, price, caption, period, description, lists, labelAction } = plan;

  const free = subscription === 'Free';

  const learn = subscription === 'Learn';

  const learn_realtime = subscription === 'Learn Real Time';

  const renderList = (
    <Stack spacing={1}>
      {lists.map((item) => (
        <Stack
          key={item}
          direction="row"
          alignItems="center"
          sx={{
            typography: 'body2',
          }}
        >
          <Iconify
            icon="eva:checkmark-circle-2-outline"
            width={24}
            sx={{ mr: 1, color: 'success.main' }}
          />
          {item}
        </Stack>
      ))}
    </Stack>
  );

  return (
    <Stack
      sx={{
        p: 3,
        ...(learn && {
          zIndex: 100,
          borderRadius: '6px',
          boxShadow: '0px 4px 9px #171a1f1C, 0px 0px 2px #171a1f1F',
        }),
        ...((free || learn_realtime) && {
          backgroundColor: '#F8F9FA',
          borderRadius: '6px 0px 0px 6px',
          boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F',
        }),
        ...sx,
      }}
      {...other}
    >
      <Stack spacing={2}>
        {/* subscriiption */}
        <Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h3" sx={{ textTransform: 'capitalize' }}>
              {subscription}
            </Typography>
            {learn && (
              <Label sx={{ px: 1.2, py: 1.5, bgcolor: 'secondary.light', borderRadius: '14px' }}>
                <Typography color="secondary" variant="caption">
                  Popular
                </Typography>
              </Label>
            )}
          </Stack>
          <Typography variant="body1" sx={{ color: '#424856FF' }}>
            {caption}
          </Typography>
        </Stack>

        {/* price */}
        <Stack direction="row">
          <>
            <Typography variant="h3">$</Typography>

            <Typography variant="h3" sx={{ fontSize: '40px' }}>
              {price}
            </Typography>
          </>

          {/* period */}
          <Typography
            component="span"
            sx={{
              color: 'text.disabled',
              ml: 1,
              typography: 'body2',
            }}
          >
            {period}
          </Typography>
        </Stack>

        {/* description */}
        <Typography
          component="span"
          sx={{
            color: 'text.disabled',
            ml: 1,
            typography: 'body2',
          }}
        >
          {description}
        </Typography>

        <Divider sx={{ borderStyle: 'dashed', color: '#DEE1E6FF' }} />

        {renderList}
      </Stack>

      <Button
        fullWidth
        size="large"
        variant={learn ? 'contained' : 'outlined'}
        disabled={active}
        color={learn ? 'primary' : 'inherit'}
        sx={{ mt: 4 }}
      >
        <Typography variant="body1">{labelAction}</Typography>
      </Button>
    </Stack>
  );
}
