import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

// SETUP COLORS

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  lighter: '#C8FAD6',
  light: '#f8f7f7',
  main: '#262020',
  dark: '#1d1919',
  darker: '#004B50',
  contrastText: '#FFFFFF',
};

const SECONDARY = {
  lighter: '#FFF0F0',
  light: '#fff0f0',
  main: '#8B0000',
  dark: '#3e0000',
  darker: '#27097A',
  contrastText: '#FFFFFF',
};

const INFO = {
  lighter: '#CAFDF5',
  light: '#f0f8fe',
  main: '#2196F3',
  dark: '#021b2e',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

const SUCCESS = {
  lighter: '#D3FCD2',
  light: '#f4faf4',
  main: '#4CAF50',
  dark: '#0d1d0d',
  darker: '#065E49',
  contrastText: '#ffffff',
};

const WARNING = {
  lighter: '#FFF5CC',
  light: '#fff9e9',
  main: '#FFC107',
  dark: '#201800',
  darker: '#7A4100',
  ccontrastText: '#000000',
};

const ERROR = {
  lighter: '#FFE9D5',
  light: '#fff4f0',
  main: '#FF4500',
  dark: '#330e00',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

const COMMON = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.2),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export function palette(mode: 'light' | 'dark') {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: '#171A1F',
      secondary: '#565D6D',
      disabled: '#9095A1',
    },
    background: {
      paper: '#FFFFFF',
      default: '#FFFFFF',
      neutral: GREY[200],
    },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.12),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return mode === 'light' ? light : dark;
}
