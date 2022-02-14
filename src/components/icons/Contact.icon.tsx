import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor } from '../../utils';
import { Svg } from './a-style';

const ContactSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);

  return (
    <Svg
      fill={color}
      style={{ transform: 'scale(1.3)' }}
      height="30"
      width="30"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 288"
    >
      <title>Contact us</title>
      <path d="M179.59,225.68c-3.11-.82-8.66-1.68-13.75-3.71-49.45-19.77-82.36-55.22-99.19-105.63-3.81-11.42-2.06-22.39,4.6-32.4A107.11,107.11,0,0,1,81,71c7.43-8.14,17.06-8.42,25-.83q10.45,10,20.44,20.43c7.61,8,7.5,16.64-.13,24.7-3.71,3.93-7.49,7.82-11.49,11.45-2.17,2-2.11,3.61-1.08,6.15,8.35,20.71,23.07,34.95,43.46,43.68,2.61,1.12,4.21.89,6.14-1.19,3.78-4.09,7.77-8,11.84-11.81,7.69-7.21,16.39-7.39,23.94-.23q10.85,10.29,21.15,21.15c6.74,7.1,7.49,16.28.64,22.69C210.12,217.36,197.78,225.28,179.59,225.68Zm.9-8.42c14.65-.52,24.81-7.52,34.2-15.64,3.85-3.33,3.2-7.45-.81-11.58q-9.91-10.2-20.09-20.1c-4.71-4.58-8.3-4.48-13.16.21q-6.76,6.51-13.3,13.25c-3.07,3.16-6.37,3.9-10.55,2.23-24.88-9.94-42.46-27.07-52-52.27-1.57-4.17-1-7.49,2.19-10.57,4.61-4.48,9.19-9,13.6-13.66,4.08-4.32,4.26-7.9.31-12Q110.51,86.29,99.7,75.93c-4.09-3.91-8.06-3.77-12,.43a106,106,0,0,0-8.42,10.77c-6.29,8.71-7.71,18.19-4.13,28.36,16.67,47.39,48,80.82,95,99C173.9,216,177.94,216.6,180.49,217.26Z" />
    </Svg>
  );
};

export default ContactSvg;
