import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

const BellSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 45.598 38.041">
      <defs>{/* <style>.a{fill:#003000;}</style> */}</defs>
      <path
        fill={color}
        d="M119.495,133.9H101.713c-2.815,0-4.424-1.144-4.747-3.285s.978-3.717,3.712-4.272c1.6-.337,1.97-1.3,1.96-2.725-.028-3.56-.043-7.12,0-10.671a17.089,17.089,0,1,1,34.177,0q.066,5.335,0,10.666c0,1.571.475,2.468,2.2,2.748,2.373.38,3.641,2.008,3.484,4.025-.166,2.122-1.771,3.494-4.272,3.508Q128.86,133.9,119.495,133.9Z"
        transform="translate(-96.918 -95.86)"
      />
    </svg>
  );
};

export default BellSvg;
