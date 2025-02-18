// @mui
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const lgUp = useResponsive('up', 'lg');

  return (
    <Stack alignItems="flex-start">
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ ml: 2, mt: 2 }}>
          <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
        </IconButton>
      )}
    </Stack>
  );
}
