import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces/general.interface';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

export const CloseSvg = (props: IconProps): JSX.Element => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);

  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill={color} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
        fill={color}
      />
    </Svg>
  );
};

export default CloseSvg;
