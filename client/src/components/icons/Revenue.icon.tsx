import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

const RevenueSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);
  return (
    <Svg
      fill={color}
      style={{ transform: `scale(${props.scale || 4})` }}
      height={size}
      width={size}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 288"
    >
      <title>Revenue</title>
      <path d="M122.17,155.16h10.69c2.75,8,3.12,8.48,9.42,10.55,0-5.28.09-10.34-.1-15.39,0-.79-1.24-1.81-2.13-2.22-1.8-.84-3.78-1.26-5.65-2-7.48-2.8-11-7.35-11.21-14.26a16.47,16.47,0,0,1,10.6-16,83,83,0,0,1,8.11-2.47c1.45-1.93-1.34-7.36,4.94-5.69l.81,5.87c9.75,1.75,17.12,6.08,18.16,17.46H155.46l-6.18-7.93-1.94.89c0,4.07-.19,8.15.14,12.19.08,1,1.74,2.1,2.92,2.63,2.11,1,4.48,1.31,6.59,2.25,7,3.12,11.17,8.19,11,16.23-.15,7.76-4.34,12.75-11,15.82-3,1.37-6.27,2-9.52,3-.18,2-.36,3.94-.55,5.94-2.9.88-4.9.68-4.57-2.89.25-2.68-.8-3.67-3.5-4.21C128.24,172.88,123.09,166.7,122.17,155.16Zm25.61,10.13c5.09-.06,8-2.37,8.34-6.71.38-4.52-1.71-6.57-8.34-7.93ZM142,136.63V123.78c-4.36.21-6.64,2.24-6.88,6C134.79,134.44,138,135.93,142,136.63Z" />
      <path d="M206.23,170c.5.22.65.35.8.34,3.07-.12,7.28-2.42,8,2.77.71,4.94-3.89,4.58-6.9,5.3-15.49,3.71-13.28,4.22-16.83-10.23a6.93,6.93,0,0,1-.51-2.93,59.52,59.52,0,0,1,2-5.94c1.78,1,3.59,2,5.34,3,.37.23.58.73.9,1.15,8.25-16.17,2.65-42.52-12.12-58.11s-41.72-25.88-71.62-10.25L111.71,89c16.78-12.1,46.45-14,69.07.79C206.91,106.89,215.94,135,206.23,170Z" />
      <path d="M174.32,195.19c1,1.57,1.73,2.83,2.48,4.12.41.7.75,1.45,1.11,2.16-17.55,12.68-46.92,12.37-67.74-.78a64.58,64.58,0,0,1-27.82-36c-4.81-15.09-3.84-30.1,2-45.32-2.11.28-3.71,1-4.92.55-1.63-.57-4-1.85-4.14-3.1s1.4-3.92,2.75-4.38a60.66,60.66,0,0,1,13.57-3.1c1.55-.14,4.14,1.93,4.86,3.6,1.37,3.15,1.76,6.72,2.5,10.13.6,2.75,1.79,6.21-2,7.09-1.82.43-4.23-1.64-6.5-2.63-7.58,13.28-2.5,40,11.08,55.52S142.2,211.46,174.32,195.19Z" />
    </Svg>
  );
};

export default RevenueSvg;