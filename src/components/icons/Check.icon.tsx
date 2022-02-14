import { useTheme } from '@emotion/react';
import React from 'react';
import { Svg } from './a-style';

interface IconProps {
  variant?: string;
}
const CheckSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const { variant } = props;
  const color = variant === 'dark' && theme.type === 'light' ? theme.colors.dark : theme.colors.white;
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11Z"
        fill="#3CA455"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3107 7.04297C16.7012 7.43349 16.7012 8.06666 16.3107 8.45718L10.1036 14.9572C9.71307 15.3477 9.0799 15.3477 8.68938 14.9572L5.68938 11.9572C5.29885 11.5667 5.29885 10.9335 5.68938 10.543C6.0799 10.1524 6.71307 10.1524 7.10359 10.543L9.39648 12.8359L14.8965 7.04297C15.287 6.65244 15.9202 6.65244 16.3107 7.04297Z"
        fill="white"
      />
    </Svg>
  );
};

export default CheckSvg;
