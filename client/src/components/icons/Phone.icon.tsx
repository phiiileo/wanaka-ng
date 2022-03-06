import { useTheme } from '@emotion/react';
import React from 'react';
import { getComputedThemeColor } from '../../utils';
import { Svg } from './a-style';

interface IconProps {
  variant?: string;
}
const PhoneSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  return (
    <svg
      id="Layer_1"
      height="30"
      width="30"
      fill={color}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 288"
    >
      <title>Phone</title>
      <path d="M71.16,144.86q0-33,0-66c0-17.39,10.28-27.71,27.6-27.74q41.22,0,82.45,0c17.29,0,27.59,10.37,27.61,27.74q0,66.21,0,132.41c0,17.05-10.39,27.47-27.36,27.5q-41.47.08-82.94,0c-17,0-27.31-10.45-27.35-27.5Q71.11,178.09,71.16,144.86Zm12.68-.11q0,33.74,0,67.48c0,9.17,4.69,13.9,13.79,13.91q42.24.08,84.47,0c9.41,0,14-4.69,14-14.18q0-67,0-134c0-9.49-4.63-14.15-14.05-14.16q-42-.06-84,0c-9.78,0-14.27,4.56-14.28,14.42Q83.81,111.51,83.84,144.75Z" />
      <path d="M140,201.17c7.66,0,15.32,0,23,0,5.48,0,8.29,2.36,8.13,6.56-.14,4-2.81,6.06-8.12,6.08q-23,.08-46,0c-5.5,0-8.28-2.36-8.13-6.57.14-4,2.77-6,8.11-6.07C124.66,201.12,132.32,201.17,140,201.17Z" />
    </svg>
  );
};

export default PhoneSvg;
