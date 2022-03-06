import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { Svg } from './a-style';

export const PackageSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const { variant } = props;
  const color = variant === 'dark' && theme.type === 'light' ? theme.colors.dark : theme.colors.white;

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
      <title>Packages</title>
      <path d="M153,197.6c0-11.65,0-23.3,0-34.95,0-6.73,3-9.68,9.8-9.69q35.2,0,70.4,0c6.68,0,9.76,3.08,9.77,9.8q.07,35.2,0,70.4c0,6.62-3.2,9.76-9.88,9.77q-35.2.07-70.4,0c-6.64,0-9.66-3.15-9.69-9.88C152.91,221.23,153,209.42,153,197.6ZM170,226c.6.31.89.59,1.18.59,17.48.06,35,0,52.44.18,3.37,0,3.17-2,3.16-4.29q0-21.22,0-42.45V170H170Z" />
      <path d="M137,197.74c0,11.5,0,23,0,34.49,0,7.56-3.1,10.7-10.53,10.71q-34.48,0-69,0c-7.57,0-10.47-3-10.48-10.69q0-34.49,0-69c0-7.38,2.93-10.3,10.28-10.31q34.73,0,69.47,0c7.4,0,10.21,2.86,10.23,10.3C137.07,174.75,137,186.25,137,197.74Zm-17-27.72H63.72v56.35h56.34Z" />
      <path d="M100,91.5c0-11.33,0-22.65,0-34,0-7.42,2.92-10.46,10.14-10.48q35,0,69.94,0c6.73,0,9.88,3.1,9.9,9.72q.08,35.22,0,70.44c0,6.12-3,9.43-9.13,9.46q-35.72.18-71.44,0c-6.38,0-9.36-3.28-9.39-9.73C100,115.14,100,103.32,100,91.5Zm73.06-27.82H116.5V119.9h56.56Z" />
    </Svg>
  );
};

export default PackageSvg;
