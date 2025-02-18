import { memo, useCallback, useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import { List, Stack, Card, Divider, ListItemText } from '@mui/material';
// routes
import { useRouter } from 'src/routes/hooks';
import { useBoolean } from 'src/hooks/use-boolean';
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { useSnackbar } from 'src/components/snackbar';
import { navVerticalConfig } from 'src/components/nav-section/config';
import { StyledIcon, StyledItem } from 'src/components/nav-section/vertical/styles';
//
import NavPlanForm from './nav-plan-form';
import NavProfileForm from './nav-profile-form';
//

// ----------------------------------------------------------------------

const items = [
  {
    title: 'Profile',
    icon: <SvgColor src="/assets/images/setting.svg" sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Support & FAQ',
    icon: <SvgColor src="/assets/images/headset.svg" sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Log out',
    icon: <SvgColor src="/assets/images/signout.svg" sx={{ width: 1, height: 1 }} />,
  },
];

const profile_menus = [
  {
    title: 'Profile',
    icon: <Iconify icon="gg:profile" />,
  },
  {
    title: 'Plan information',
    icon: <Iconify icon="mage:dollar" />,
  },
];

function NavProfile() {
  const router = useRouter();

  const { logout } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  const open = useBoolean();

  const [selectedItem, setSelectedItem] = useState('');
  const [selectedMenu, setSelectedMenu] = useState('Profile');

  const onOpen = useCallback(() => {
    open.onTrue();
  }, [open]);

  const onClose = useCallback(() => {
    setSelectedItem('');
    open.onFalse();
  }, [open]);

  const handleMenuItemChange = async (item: string) => {
    setSelectedMenu(item);
  };

  const handleNavItemChange = async (index: number) => {
    if (index < 2) {
      onOpen();
      setSelectedItem(items[index].title);
    } else {
      try {
        await logout();
        router.replace('/');
      } catch (error) {
        console.error(error);
        enqueueSnackbar('Unable to logout!', { variant: 'error' });
      }
    }
  };

  const renderButton = (
    <Card
      sx={{
        borderRadius: '6px',
        boxShadow: 'box-shadow: 0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F',
      }}
    >
      <List>
        {items.map((item, index) => (
          <>
            <StyledItem
              key={index}
              disableGutters
              disabled={false}
              active={item.title === selectedItem}
              config={navVerticalConfig()}
              // {...other}
              onClick={() => handleNavItemChange(index)}
            >
              <StyledIcon size={navVerticalConfig().iconSize}>{item.icon}</StyledIcon>

              <ListItemText
                primary={item.title}
                secondary={null}
                primaryTypographyProps={{
                  noWrap: true,
                  typography: 'body2',
                  textTransform: 'capitalize',
                  fontWeight: item.title === selectedItem ? 'fontWeightBold' : 'fontWeightRegular',
                }}
                secondaryTypographyProps={{
                  noWrap: true,
                  component: 'span',
                  typography: 'caption',
                  color: 'text.disabled',
                }}
              />
            </StyledItem>

            {index === 1 ? <Divider sx={{ mx: 1, my: 0.5 }} /> : null}
          </>
        ))}
      </List>
    </Card>
  );

  return (
    <>
      {renderButton}

      <Dialog
        fullWidth
        maxWidth={false}
        open={open.value}
        onClose={onClose}
        PaperProps={{
          sx: { maxWidth: 720 },
        }}
      >
        <Stack direction="row">
          <Box sx={{ p: 2 }}>
            <List>
              {profile_menus.map((item, index) => (
                <StyledItem
                  key={index}
                  disableGutters
                  disabled={false}
                  active={item.title === selectedMenu}
                  config={navVerticalConfig()}
                  // {...other}
                  onClick={() => handleMenuItemChange(item.title)}
                >
                  <StyledIcon size={navVerticalConfig().iconSize}>{item.icon}</StyledIcon>

                  <ListItemText
                    primary={item.title}
                    secondary={null}
                    primaryTypographyProps={{
                      noWrap: true,
                      typography: 'body2',
                      textTransform: 'capitalize',
                      fontWeight:
                        item.title === selectedMenu ? 'fontWeightBold' : 'fontWeightRegular',
                    }}
                    secondaryTypographyProps={{
                      noWrap: true,
                      component: 'span',
                      typography: 'caption',
                      color: 'text.disabled',
                    }}
                  />
                </StyledItem>
              ))}
            </List>
          </Box>
          <Box sx={{ width: 1 }}>
            {selectedMenu === 'Profile' ? (
              <NavProfileForm onClose={onClose} />
            ) : (
              <NavPlanForm onClose={onClose} />
            )}
          </Box>
        </Stack>
      </Dialog>
    </>
  );
}

export default memo(NavProfile);
