import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor } from '../../utils';
import { Svg } from './a-style';

const HamburgerSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);

  return (
    <Svg width="24" height="16" viewBox="0 0 24 16" fill={color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z" fill={color} />
    </Svg>
  );
};

export default HamburgerSvg;
