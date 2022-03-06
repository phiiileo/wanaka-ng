import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor } from '../../utils';
import { Svg } from './a-style';

const CommentSvg = (props: IconProps) => {
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
      <title>Tell your story</title>
      <path d="M55,136.67c.37-14.78,8-29.13,21.06-40.65,20.08-17.77,44.15-24.7,70.49-24.41,24.35.27,46.73,6.9,65.59,22.86,30.82,26.09,30.6,65.88-.82,91.16-7.65,6.16-12.49,12.46-11.47,22.62.44,4.36-2.08,7.76-6.16,9.38a9.77,9.77,0,0,1-11.07-2.23c-1.43-1.39-2.89-2.76-4.34-4.13-4.27-4.05-9.2-5.44-15.11-4.63-30.42,4.18-58.75-.89-83.53-20C63.72,174.3,55,157.12,55,136.67ZM189.94,209.2a19.37,19.37,0,0,0,.44-2.86c-.57-11.68,4.32-20.27,13.83-27.06,9.71-6.93,16.79-16.31,19.68-28.07,5.06-20.61-2.82-36.88-18.32-50-14.61-12.35-32-18.16-50.81-19.77-24.68-2.1-47.77,2.72-67.95,17.79C75.23,107.9,66.79,119,65,133.75,62.49,155,72.6,170.39,89.19,182c21.39,14.91,45.52,18.8,70.95,15.47,9.32-1.23,17.54.14,24.49,6.78C186.17,205.68,187.73,207.12,189.94,209.2Z" />
    </Svg>
  );
};

export default CommentSvg;
