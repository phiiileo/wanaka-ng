import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor } from '../../utils';
import { Svg } from './a-style';

const PasswordSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);

  return (
    <svg
      id="Layer_1"
      fill={color}
      width="30"
      height="30"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 288"
    >
      <title>Sign up</title>
      <path d="M100.54,112.62c0-7.73-.62-15.09.11-22.31,2.4-23.71,22.17-41.09,45-40,23.58,1.09,41.49,19.43,42.3,43.48.21,6.13,0,12.28,0,19.13,2.37,0,4.3,0,6.23,0,9.76.28,18.13,6.62,18.3,16.29.34,18.26,1.48,36.95-1.74,54.74-7.47,41.23-53.26,64.78-91.95,48.83-2.3-.95-4.94-3.28-5.62-5.52-1.58-5.16,3.58-8.59,9.27-6.32a56.57,56.57,0,0,0,36.69,2.23c23.42-6.34,40.48-27.71,41-51.94.3-12.82.15-25.65.1-38.48,0-5.38-2.14-7.49-7.67-7.5q-48.48-.07-97,0c-3.88,0-7.49,1.18-7.47,5.56.07,16.46.38,32.94,1,49.39.15,3.68,2,7.35,3.27,10.93,1.44,3.91.77,7.16-3.12,8.73s-7.29.09-8.3-4c-2.19-8.81-4.76-17.69-5.51-26.68-1-11.25-.24-22.64-.23-34,0-15.13,6.67-22,21.75-22.34C97.88,112.83,98.69,112.75,100.54,112.62Zm74.71,0c0-6.83.17-13.44,0-20-.48-15.13-12.13-27.83-26.83-29.48-16.1-1.8-30.83,7.35-34.08,22.62-1.84,8.6-1.27,17.71-1.8,26.9Z" />
      <path d="M162.94,169.12a18.81,18.81,0,1,1-18.71-18.89A19.15,19.15,0,0,1,162.94,169.12Zm-12.69.69c.06-4.17-2.33-6.74-5.77-6.9a5.92,5.92,0,0,0-6.45,6,5.85,5.85,0,0,0,6.27,6.19C148.09,175,150,172.79,150.25,169.81Z" />
    </svg>
  );
};

export default PasswordSvg;
