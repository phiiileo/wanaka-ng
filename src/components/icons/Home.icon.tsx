import { useTheme } from '@emotion/react';
import React from 'react';
import { getComputedThemeColor } from '../../utils';
import { Svg } from './a-style';

interface IconProps {
  variant?: string;
}
const HomeSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  return (
    <svg
      id="Layer_1"
      width="30"
      height="30"
      style={{ transform: 'scale(1.5)' }}
      fill={color}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 288"
    >
      <title>Home icon</title>
      <path d="M234.32,126q-41.85-32.88-83.68-65.81c-3.89-3.07-7.2-3.22-11.16-.1q-42,33.15-84.08,66.11c-2.72,2.15-5.19,4.41-3.7,8.37,1.43,3.81,4.61,4.35,8.15,4.32,7.3,0,14.6,0,22.64,0v6.71q0,32.51,0,65c0,15,7.06,21.91,22.13,22q9.24,0,18.49,0c7.83,0,9.36-1.56,9.38-9.43,0-11,.05-22,0-33,0-4.81,1.42-8.9,5.53-11.64a11.54,11.54,0,0,1,12.32-.8,12.46,12.46,0,0,1,7.1,11.74c.07,11.67,0,23.33.07,35,0,6.2,1.91,8,8.14,8.11,6.67.09,13.33.05,20,0,14.69-.06,21.8-7.11,21.83-21.76,0-21.83,0-43.66,0-65.49v-6.42c7.86,0,15.15,0,22.44,0,3.73,0,7.09-.51,8.43-4.62S237,128.07,234.32,126ZM144,139a22,22,0,1,1,22-22A22,22,0,0,1,144,139Z" />
    </svg>
  );
};

export default HomeSvg;
