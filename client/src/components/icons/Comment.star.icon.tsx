import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { Svg } from './a-style';

export const CommentStarSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const { variant } = props;
  const color = variant === 'dark' && theme.type === 'light' ? theme.colors.dark : theme.colors.white;

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
      <title>Stories</title>
      <path d="M45,91c2.41-1.21,4.71-2.93,7.27-3.52a73.64,73.64,0,0,1,14.79-2.16c5.53-.11,8.3-2.65,10.22-7.54a109.09,109.09,0,0,1,7.31-14.73c.94-1.62,3.11-3.32,4.82-3.43,1.41-.1,3.52,1.78,4.37,3.32,3,5.38,5.73,10.89,8.18,16.53,1.57,3.6,3.71,5.33,7.76,5.65A163.28,163.28,0,0,1,128,87.85c1.71.34,4.16,1.73,4.49,3.07a7.2,7.2,0,0,1-1.77,5.63c-4.53,4.87-9.63,9.22-14.09,14.14a9.12,9.12,0,0,0-2,6.42c.7,6.27,2.26,12.44,3,18.71.24,2-.33,5.08-1.7,6.1s-4.45.61-6.29-.24c-6-2.8-11.76-6.23-17.77-9.07a7.1,7.1,0,0,0-5.36,0c-6,2.85-11.73,6.29-17.75,9.09-1.84.85-4.94,1.22-6.29.22s-1.81-4-1.58-6.07c.77-6.44,2.27-12.78,3-19.22a8.7,8.7,0,0,0-2-6C56.41,104.58,50.64,98.85,45,93Zm15.9,4.71c3.61,3.79,6.46,7.28,9.81,10.2,3.19,2.78,3.91,5.83,3.09,9.76-.9,4.3-1.47,8.67-2.35,14,5-2.59,9-4.44,12.84-6.75,3.37-2,6.29-2.15,9.71-.06,4,2.43,8.25,4.37,13.11,6.89-1-5.81-1.56-10.59-2.64-15.25a7.39,7.39,0,0,1,2.6-8c3.56-3.19,7-6.56,11.32-10.69-6.19-1-11.17-1.33-15.89-2.63a11.84,11.84,0,0,1-6.24-4.66c-2.64-4.07-4.49-8.65-7.05-13.8C86.59,80,84.66,84.65,82,88.8a10.84,10.84,0,0,1-5.85,4.41C71.42,94.47,66.43,94.86,60.9,95.71Z" />
      <path d="M223.54,216.57c-1.45-8-2.87-14.78-3.85-21.66-.27-1.91.07-4.56,1.24-5.93,28-32.83,12.56-81.07-31.81-96.23a80.43,80.43,0,0,0-38.92-3.31c-3.5.54-6.24,0-6.92-3.7s1.92-5.14,5-5.55c32.12-4.23,60,4,81,29.54,19.49,23.67,20,55.74,2.21,80.64-1.76,2.46-2.59,4.55-1.85,7.72,1.74,7.45,3,15,4.27,22.56,1.12,6.65-1.45,8.84-7.79,6.76-7.74-2.54-15.39-5.38-23.2-7.68a17.08,17.08,0,0,0-8.57-.32c-22.15,5.6-44.18,6.94-65.61-2.53-25.64-11.34-42.35-30-46.27-58.66-.29-2.13-.92-4.56-.22-6.41s2.68-4.18,4.51-4.63c1.15-.27,3.88,2.25,4.42,4,1,3.11.51,6.64,1.22,9.87,6.13,27.93,24.72,43.56,51.23,50.88,16.92,4.68,33.67,2,50.36-2a20.47,20.47,0,0,1,9.56.17C210,211.74,216.19,214.12,223.54,216.57Z" />
      <path d="M163.08,155.9c-10.81,0-21.63,0-32.45,0-3.39,0-6.7-.36-6.76-4.7s3.3-4.78,6.67-4.78q32.7,0,65.4,0c3.42,0,6.81.49,6.82,4.7s-3.22,4.84-6.73,4.82C185.05,155.86,174.07,155.9,163.08,155.9Z" />
      <path d="M163.38,131.46c-11.15,0-22.31.17-33.45-.15-2-.06-4.9-1.63-5.78-3.33-1.68-3.27,1.19-5.9,6.1-5.91,15.48,0,30.95,0,46.43,0,6.65,0,13.31,0,20,0,3.45,0,6.16,1.11,6.12,4.89,0,3.58-2.79,4.53-6,4.53Z" />
      <path d="M142.44,180.09c-4.5,0-9,0-13.49,0-3.15,0-5.62-1.58-4.92-4.72.39-1.75,3-4.2,4.75-4.28,9.14-.42,18.32-.43,27.46,0,1.69.08,4.31,2.58,4.67,4.34.66,3.16-1.85,4.65-5,4.65Z" />
    </Svg>
  );
};

export default CommentStarSvg;