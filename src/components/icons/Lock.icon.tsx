import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

const LockSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);
  return (
    <Svg
      fill={color}
      style={{ transform: 'scale(2)' }}
      height={size}
      width={size}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 288"
    >
      <title>BVN</title>
      <path d="M145.24,208.89c-9,0-18.09.05-27.13,0-11.49-.09-18.69-7.31-18.72-18.72,0-13,.06-26.07,0-39.11,0-7.19,2.82-12.61,8.89-16.53A5.19,5.19,0,0,0,110,130.9c.47-7.36-.24-14.93,1.23-22.07,3.65-17.78,19.77-28.78,38.18-27,16.72,1.58,30.09,16.19,30.88,33.93.23,5.15-.06,10.33.18,15.49a5.07,5.07,0,0,0,2,3.47c5.6,3.77,8.58,8.87,8.59,15.64,0,13.5,0,27,0,40.51,0,10.37-7.27,17.84-17.62,18-9.39.17-18.79,0-28.18,0Zm-.13-70.43c-8.81,0-17.62,0-26.42,0s-13,4.36-13,13q0,19.2,0,38.4c0,8.44,4.34,12.9,12.74,12.92q26.76.09,53.54,0c8.45,0,12.85-4.46,12.87-12.81q0-19.2,0-38.4c0-8.68-4.3-13.05-12.92-13.09C163,138.42,154,138.46,145.11,138.46Zm29-6.35c0-5.58.23-11,0-16.32-.6-11.5-6-20.19-16.44-25.14-10.26-4.87-20.34-3.85-29.58,2.84-10.47,7.59-15.19,24.29-11.12,38.62Z" />
      <path d="M142.15,179.71c0-1.64,0-3.28,0-4.91.1-3.05,0-5.58-3-7.83-3.89-2.84-3.44-9.12.13-12.44a8.85,8.85,0,0,1,12.34.38c3.37,3.56,3.33,9.56-.62,12.48-2.38,1.75-2.79,3.61-2.71,6.19.14,4.68,0,9.37,0,14.06,0,2.13-.26,4.18-3,4.24s-3.15-1.9-3.15-4.09Q142.17,183.76,142.15,179.71Z" />
    </Svg>
  );
};

export default LockSvg;