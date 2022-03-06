import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

const UserSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);
  return (
    <Svg
      fill={color}
      style={{ transform: `scale(${props.scale ?? 2})` }}
      height={size}
      width={size}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 288"
    >
      <title>Account icon</title>
      <path d="M145.13,157.5c8,0,16-.1,24,0,19,.3,31.89,13.31,32,32.22,0,3.83.07,7.66,0,11.49s-2.23,6-5.92,6.08c-3.93.1-6.21-2.14-6.32-6.15s.05-8-.07-12c-.36-11.31-8.18-19.08-19.44-19.14q-24.24-.12-48.48,0c-11.6.06-19.39,7.77-19.7,19.38-.1,3.83,0,7.66,0,11.49S99,207.28,95,207.31,88.79,205,88.89,201c.18-6.8-.23-13.78,1.19-20.34a29.2,29.2,0,0,1,27.07-22.81c9.3-.55,18.65-.11,28-.11Z" />
      <path d="M176.15,113.92a31.15,31.15,0,1,1-30.84-31.37A31.14,31.14,0,0,1,176.15,113.92ZM145,132.41a18.7,18.7,0,1,0-18.78-18.69A18.78,18.78,0,0,0,145,132.41Z" />
    </Svg>
  );
};

export default UserSvg;
