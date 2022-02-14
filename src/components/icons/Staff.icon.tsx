import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

export const StaffSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);

  return (
    <Svg
      fill={color}
      style={{ transform: `scale(${props.scale ? props.scale : 1.3})` }}
      height={size}
      width={size}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 288"
    >
      <title>Staff</title>
      <path d="M107,154.19C89.47,123.93,91.72,98.78,113.32,81a50.76,50.76,0,0,1,65.26.81c21.25,18.4,22.89,43.49,4.69,73.15,3.78,1.72,7.63,3.25,11.29,5.17C217.31,172,230,190.64,231.7,216.49c.45,7-.56,8.14-7.72,8.14H67c-7.27,0-8.27-1.15-7.72-8.62C61.55,185.71,77,165.59,107,154.19Zm116.57,62.2c-.38-3.26-.47-5.92-1-8.49-5.13-24.67-21.63-38.43-44.52-45.83-1.54-.5-3.87.19-5.4,1.08-18.38,10.7-36.59,10.48-54.88-.29a9.37,9.37,0,0,0-6.4-1.08C91.55,166.86,77.94,179.1,71,198.31c-2,5.63-2.75,11.72-4.15,18h26c0-3.26-.44-6.3.11-9.15.75-3.88-3.13-10.8,3.74-10.92s3.42,6.84,4.05,10.73c.5,3,.1,6.17.1,9.43Zm-35.4-96.15c-.09-23.82-19.34-43-42.89-42.82a42.78,42.78,0,1,0,42.89,42.82Z" />
      <path d="M187.77,199.25H167.41c-.49,1.2-.66,2.82-1.55,3.49-1.27.95-3.43,2.07-4.57,1.59-4.1-1.72-2.65-5.74-2.35-8.77.15-1.55,2.37-4.1,3.73-4.15,9.8-.37,19.63-.37,29.43,0,1.41.05,3.84,2.55,3.88,4,.09,2.86-.22,7.15-2,8.37C190.18,206.26,188.72,202.35,187.77,199.25Z" />
      <path d="M145.34,148c-2.67,0-5.47.51-8-.17-1.76-.48-3.09-2.56-4.61-3.92,1.44-1.3,2.79-3.59,4.32-3.7a115.51,115.51,0,0,1,17.45,0c1.55.12,2.93,2.39,4.39,3.68-1.54,1.37-2.89,3.52-4.66,3.94C151.44,148.49,148.33,148,145.34,148Z" />
    </Svg>
  );
};

export default StaffSvg;
