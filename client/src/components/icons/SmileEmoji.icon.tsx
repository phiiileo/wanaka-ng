import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor } from '../../utils';
import { Svg } from './a-style';

const SmileEmojiSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  return (
    <Svg
      fill={color}
      style={{ transform: 'scale(1.3)' }}
      height="30"
      width="30"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 288"
    >
      <title>Next of kin</title>
      <path d="M235,145.14A90,90,0,1,1,145.13,55,90.18,90.18,0,0,1,235,145.14ZM65,144.7c-.1,44,35.57,80.08,79.45,80.29,44.24.22,80.44-35.6,80.55-79.7S189.4,65.19,145.54,65C101.23,64.82,65.11,100.57,65,144.7Z" />
      <path d="M145,185.07a59,59,0,0,1-36.93-12.92c-2.85-2.27-5.12-4.89-2.43-8.36s5.7-1.84,8.61.42c18.74,14.54,42.63,14.57,61.29.08,2.87-2.23,5.86-4.1,8.63-.6,2.93,3.69.34,6.36-2.64,8.69A59.05,59.05,0,0,1,145,185.07Z" />
      <path d="M120.88,128.4a11.41,11.41,0,1,1-22.8-.68,11.41,11.41,0,0,1,22.8.68Z" />
      <path d="M191.9,128.25a11.4,11.4,0,1,1-22.8-.38,11.4,11.4,0,0,1,22.8.38Z" />
    </Svg>
  );
};

export default SmileEmojiSvg;
