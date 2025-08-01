import { forwardRef } from 'react';
// @mui
import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >
        <svg viewBox="0 0 213.97 184.62" width="36" height="31" xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(1 0 0 1 106.98 92.31)">
            <g>
              <g transform="matrix(1 0 0 1 0 0)" id="OBJECTS">
                <path
                  stroke="none"
                  strokeWidth="1"
                  strokeDasharray="none"
                  strokeLinecap="butt"
                  strokeDashoffset="0"
                  strokeLinejoin="miter"
                  strokeMiterlimit="4"
                  fill="rgb(139,0,0)"
                  fillRule="nonzero"
                  opacity="1"
                  transform=" translate(-106.98, -92.31)"
                  d="M 114.41 160.66 L 119.36999999999999 160.66 C 120.82999999999998 160.66 122.21999999999998 161.29 123.17999999999999 162.39 L 141.01 182.88 C 144.07 186.4 149.85999999999999 184.23 149.85999999999999 179.57 L 149.85999999999999 164.78 C 149.85999999999999 162.27 151.70999999999998 160.18 154.19 159.79 C 188.07 154.45999999999998 213.97 125.13 213.97 89.75999999999999 L 213.97 70.92999999999999 C 213.97 31.75 182.22 0 143.07 0 L 70.89999999999999 0 C 31.75 0 0 31.75 0 70.93 L 0 74.30000000000001 C 0 74.30000000000001 0 74.30000000000001 0 74.30000000000001 L 0 84.71000000000001 C 0 126.65 34 160.66000000000003 75.95 160.66000000000003 L 114.41 160.66000000000003"
                  // stroke-linecap="round"
                />
              </g>
              <g transform="matrix(1 0 0 1 0.01 8.34)" id="OBJECTS">
                <path
                  stroke="none"
                  strokeWidth="1"
                  strokeDasharray="none"
                  strokeLinecap="butt"
                  strokeDashoffset="0"
                  strokeLinejoin="miter"
                  strokeMiterlimit="4"
                  fill="rgb(38,32,32)"
                  fillRule="nonzero"
                  opacity="1"
                  transform=" translate(-107, -100.65)"
                  d="M 106.99 128.6 C 78.21 128.6 52.209999999999994 110.46 42.28 83.46 C 40.75 79.30999999999999 42.88 74.72 47.03 73.19 C 51.18 71.67 55.78 73.78999999999999 57.3 77.94 C 64.92999999999999 98.67 84.9 112.61 107 112.61 C 129.1 112.61 149.07 98.68 156.7 77.95 C 158.23 73.8 162.82 71.68 166.97 73.2 C 171.12 74.72 173.24 79.32000000000001 171.72 83.47 C 161.79 110.47 135.78 128.61 107.01 128.61 Z"
                  // stroke-linecap="round"
                />
              </g>
            </g>
          </g>
        </svg>
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
