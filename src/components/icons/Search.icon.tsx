import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor } from '../../utils';
import { Svg } from './a-style';

const SearchSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);

  return (
    <Svg
      fill={color}
      style={{ transform: 'scale(2)' }}
      height="30"
      width="30"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 288"
    >
      <title>Search</title>
      <path d="M175.65,183.45C137.34,212.89,92.39,197,73.37,170.78c-20.69-28.57-17.85-68.34,7.23-92.73a70.82,70.82,0,0,1,94-4.74c27.31,21.87,36.76,63.2,12.49,97.89l24.27,24.18c2.36,2.36,4.79,4.65,7,7.1,3.56,3.9,3.56,8.75.17,12s-8.18,3.31-12-.47c-9.51-9.34-18.88-18.82-28.32-28.24C177.37,185,176.49,184.23,175.65,183.45Zm9.58-55a55.05,55.05,0,0,0-110.1-.14c-.13,30.36,25,55.52,55.3,55.31A55.06,55.06,0,0,0,185.23,128.47Z" />
    </Svg>
  );
};

export default SearchSvg;
