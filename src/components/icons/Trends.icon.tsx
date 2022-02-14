import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

export const TrendSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);
  return (
    <Svg
      fill={color}
      style={{ transform: 'scale(1.3)' }}
      height={size}
      width={size}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 288"
    >
      <title>Total Investment</title>
      <path d="M232.17,76.23H180.45a7,7,0,0,0,0,14h33.16L145,163.87l-8.72-38.72a7,7,0,0,0-11.92-3.27L50.73,200a7,7,0,1,0,10.19,9.61l64.62-68.51,8.74,38.82a7,7,0,0,0,11.95,3.23l78.94-84.75v33.87a7,7,0,0,0,14,0v-49A7,7,0,0,0,232.17,76.23Z" />
    </Svg>
  );
};

export default TrendSvg;
