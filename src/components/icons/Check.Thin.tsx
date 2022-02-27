import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

const CheckMarkThinSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);
  return (
    <Svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M69.3337 32.9335V36.0001C69.3296 43.1882 67.002 50.1824 62.6981 55.9395C58.3942 61.6967 52.3446 65.9084 45.4515 67.9465C38.5584 69.9845 31.1912 69.7398 24.4486 67.2487C17.7059 64.7577 11.9492 60.1538 8.03686 54.1237C4.12455 48.0936 2.2663 40.9603 2.73925 33.7878C3.2122 26.6153 5.99102 19.7879 10.6613 14.3237C15.3315 8.85952 21.6429 5.05139 28.6543 3.46727C35.6656 1.88315 43.0012 2.60791 49.567 5.53345M69.3337 9.33345L36.0003 42.7001L26.0003 32.7001"
        stroke="#00BD1E"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CheckMarkThinSvg;
