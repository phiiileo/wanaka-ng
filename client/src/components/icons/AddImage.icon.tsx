import { useTheme } from '@emotion/react';
import React from 'react';
import { Svg } from './a-style';

interface IconProps {
  variant?: string;
}
const AddImageSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const { variant } = props;
  const color = variant === 'dark' && theme.type === 'light' ? theme.colors.dark : theme.colors.white;
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 3.33325V0.833252H4.16667V3.33325H6.66667V4.99992H4.16667V7.49992H2.5V4.99992H0V3.33325H2.5ZM5 8.33325V5.83325H7.5V3.33325H13.3333L14.8583 4.99992H17.5C18.4167 4.99992 19.1667 5.74992 19.1667 6.66658V16.6666C19.1667 17.5833 18.4167 18.3333 17.5 18.3333H4.16667C3.25 18.3333 2.5 17.5833 2.5 16.6666V8.33325H5ZM10.8333 15.8333C13.1333 15.8333 15 13.9666 15 11.6666C15 9.36658 13.1333 7.49992 10.8333 7.49992C8.53333 7.49992 6.66667 9.36658 6.66667 11.6666C6.66667 13.9666 8.53333 15.8333 10.8333 15.8333ZM8.16666 11.6666C8.16666 13.1416 9.35833 14.3333 10.8333 14.3333C12.3083 14.3333 13.5 13.1416 13.5 11.6666C13.5 10.1916 12.3083 8.99992 10.8333 8.99992C9.35833 8.99992 8.16666 10.1916 8.16666 11.6666Z"
        fill="#D65A31"
      />
    </Svg>
  );
};

export default AddImageSvg;
