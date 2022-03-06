import { useTheme } from '@emotion/react';
import React from 'react';
import { getComputedThemeColor } from '../../utils';
import { Svg } from './a-style';

interface IconProps {
  variant?: string;
}
const SMGoggle = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_819_7021)">
        <path
          d="M29.6419 15.3453C29.6419 14.3257 29.5592 13.3005 29.3828 12.2974H15.2344V18.0736H23.3365C23.0003 19.9365 21.92 21.5845 20.3382 22.6317V26.3797H25.1719C28.0104 23.7671 29.6419 19.909 29.6419 15.3453Z"
          fill="#4285F4"
        />
        <path
          d="M15.2344 30.0012C19.28 30.0012 22.6917 28.6728 25.1774 26.38L20.3437 22.6321C18.9989 23.547 17.2627 24.0651 15.2399 24.0651C11.3266 24.0651 8.0086 21.425 6.81808 17.8755H1.83002V21.7392C4.37641 26.8044 9.56289 30.0012 15.2344 30.0012V30.0012Z"
          fill="#34A853"
        />
        <path
          d="M6.81255 17.8754C6.18422 16.0124 6.18422 13.9952 6.81255 12.1322V8.26855H1.83C-0.297501 12.507 -0.297501 17.5006 1.83 21.7391L6.81255 17.8754V17.8754Z"
          fill="#FBBC04"
        />
        <path
          d="M15.2344 5.93708C17.3729 5.90401 19.4398 6.70871 20.9886 8.18584L25.2711 3.90327C22.5594 1.35688 18.9603 -0.0430825 15.2344 0.00101083C9.56288 0.00101083 4.37641 3.19778 1.83002 8.26851L6.81256 12.1322C7.99757 8.57716 11.3211 5.93708 15.2344 5.93708V5.93708Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_819_7021">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SMGoggle;
