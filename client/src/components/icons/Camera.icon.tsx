import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

const CameraSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);

  return (
    <Svg
      style={{ transform: 'scale(2)' }}
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 288 288"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Camera</title>
      <path d="M148.53,197.11c-16.31,0-32.63,0-48.94,0-11.67,0-17.86-6.17-17.91-17.85q-.12-23,0-45.94c.06-11.64,6.28-17.81,17.92-18a6.68,6.68,0,0,1,1,0c10.36,1.68,18.18-.57,21.52-12.06,1.33-4.58,5.89-6.57,10.82-6.58q15.24,0,30.46,0c5.61,0,9.2,2.83,11.75,7.75,6.63,12.79,2.58,10.66,17.81,10.89a71.54,71.54,0,0,1,7.48.23c8.38,1.06,14.39,7.38,14.49,15.79q.28,25,0,49.94c-.1,9.24-7,15.73-16.46,15.79C181.83,197.19,165.18,197.11,148.53,197.11ZM148,182.27c15.89.08,28.51-12.77,28.56-29.05,0-15.94-12.49-29-28-29.21-15.88-.19-28.62,12.61-28.71,28.86S132.19,182.19,148,182.27Z" />
      <path d="M148.28,165.09a11.6,11.6,0,0,1-11.57-11.78,11.7,11.7,0,1,1,23.37.23A11.62,11.62,0,0,1,148.28,165.09Z" />
    </Svg>
  );
};

export default CameraSvg;
