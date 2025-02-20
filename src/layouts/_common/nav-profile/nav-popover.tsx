// @mui
import Popover, { PopoverProps } from '@mui/material/Popover';
//
import { forwardRef } from 'react';

// ----------------------------------------------------------------------

interface Props extends Omit<PopoverProps, 'open'> {
  open: HTMLElement | null;
  children: React.ReactNode;
}

const NavPopover = forwardRef<HTMLDivElement, Props>(({ open, children, ...other }, ref) => (
  <Popover
    open={Boolean(open)}
    anchorEl={(ref as React.MutableRefObject<HTMLDivElement>)?.current} // ✅ Fix ref type
    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
    transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    {...other}
  >
    {children}
  </Popover>
));

export default NavPopover;
