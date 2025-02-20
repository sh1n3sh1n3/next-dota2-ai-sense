'use client';

import { useEffect, useRef } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// components
import Logo from 'src/components/logo';
import Scrollbar from 'src/components/scrollbar';
import { usePathname } from 'src/routes/hooks';
import { usePopover } from 'src/components/custom-popover';
import { NavSectionVertical } from 'src/components/nav-section';
//
import { NAV } from '../config-layout';
import { useNavData } from './config-navigation';
import { NavProfile, NavUpgrade } from '../_common';
import NavPopover from '../_common/nav-profile/nav-popover';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const containerRef = useRef(null);

  const popover = usePopover();

  const pathname = usePathname();

  const mdUp = useResponsive('up', 'md');

  const navData = useNavData();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Box sx={{ height: 1, bgcolor: 'secondary.lighter', borderRadius: '16px', p: 2 }}>
      <Scrollbar
        sx={{
          height: 1,
          '& .simplebar-content': {
            height: 1,
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Stack spacing={1} direction="row" alignItems="center" sx={{ mb: 1 }}>
          <Logo />
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            Dota 2 - AI Sense
          </Typography>
        </Stack>

        <Stack justifyContent="space-between" sx={{ height: 1 }}>
          <NavSectionVertical
            data={navData}
            config={{
              currentRole: 'admin',
            }}
          />

          <Stack ref={containerRef}>
            <NavPopover ref={containerRef} open={popover.open} onClose={popover.onClose}>
              <NavProfile />
            </NavPopover>
            <Box ref={containerRef}>
              <NavUpgrade onOpen={popover.onOpen} />
            </Box>
          </Stack>
        </Stack>
      </Scrollbar>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { md: 0 },
        width: { md: NAV.W_VERTICAL },
      }}
    >
      {mdUp ? (
        <Stack
          sx={{
            p: 2,
            height: 1,
            position: 'fixed',
            width: NAV.W_VERTICAL,
          }}
        >
          {renderContent}
        </Stack>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.W_VERTICAL,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
