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
  const mdUp = useResponsive('up', 'md');

  return (
    <Stack alignItems="flex-start">
      {!mdUp && (
        <IconButton onClick={onOpenNav} sx={{ ml: 1, mt: 1 }}>
          <SvgColor src="/assets/images/ic_menu_item.svg" />
        </IconButton>
      )}
    </Stack>
  );
}
