import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor } from '../../utils';
import { Svg } from './a-style';

const ExploreIcon = (props: IconProps): JSX.Element => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  return (
    <Svg
      id="Layer_1"
      width="30"
      height="30"
      style={{ transform: 'scale(1.5)' }}
      fill={color}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 288"
    >
      <title>Explore</title>
      <path d="M145.09,57.54A87.47,87.47,0,0,1,232.45,145c0,48.41-39.51,87.79-87.81,87.48s-87.31-39.54-87.1-87.68A87.45,87.45,0,0,1,145.09,57.54ZM145.31,70A75,75,0,1,0,220,145.31,74.93,74.93,0,0,0,145.31,70Z" />
      <path d="M108.3,188.75c-5.72.16-8.51-5.05-5.81-10.06,5.22-9.67,11.3-18.93,15.8-28.91,6.63-14.72,16.93-24.93,31.62-31.56,9.68-4.37,18.73-10.13,28-15.37,3.2-1.8,6.24-2.54,9.06.43,2.63,2.78,1.89,5.67.19,8.69-7.81,13.94-15.29,28.08-23.45,41.81a30.06,30.06,0,0,1-10.08,10c-13.74,8.16-27.85,15.67-41.84,23.4A34.89,34.89,0,0,1,108.3,188.75ZM166,124.36c-16.36,7.55-31,14.67-36.83,31.81-1,3-2.88,5.63-4.36,8.43a204.77,204.77,0,0,0,22.53-11.46,12.18,12.18,0,0,0,4.51-3.8C156.47,141.54,160.82,133.56,166,124.36Z" />
    </Svg>
  );
};

export default ExploreIcon;
