import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces/general.interface';
import { getComputedThemeColor } from '../../utils';
import { Svg } from './a-style';

const MessageSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);

  return (
    <Svg
      id="Layer_1"
      fill={color}
      height="30"
      width="30"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 288"
    >
      <title>Sign up</title>
      <path d="M133.5,211h-63C57.19,211,50,203.9,50,190.75q0-39.75,0-79.49C50,98.3,57.18,91,70,91q64,0,128,0c12.8,0,20,7.3,20,20.22q0,39.75,0,79.5c0,13.14-7.21,20.26-20.49,20.27ZM206,113c-1.89,1.66-2.89,2.5-3.85,3.39q-27,24.92-54,49.86c-9.59,8.85-19,8.78-28.65-.15Q92.4,140.93,65.24,115.81c-.8-.73-1.67-1.38-2.59-2.14-.34.65-.6.92-.6,1.19q0,38.74,0,77.48c0,4.72,2.25,6.64,7.39,6.64q64.48,0,129,0c5.57,0,7.54-2,7.58-7.49.07-8.66,0-17.33,0-26ZM69.82,103.28a20.67,20.67,0,0,0,1.55,1.86q28.95,26.79,57.89,53.59c3.64,3.39,6.62,2.57,9.93-.51q28-26,56.08-51.87c.89-.83,1.67-1.77,2.87-3.07Z" />
    </Svg>
  );
};

export default MessageSvg;
