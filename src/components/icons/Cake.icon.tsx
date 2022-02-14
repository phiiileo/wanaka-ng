import { useTheme } from '@emotion/react';
import React from 'react';
import { Svg } from './a-style';

interface IconProps {
  variant?: string;
}
const CakeSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const { variant } = props;
  const color = variant === 'dark' && theme.type === 'light' ? theme.colors.dark : theme.colors.white;
  return (
    <Svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 4.5C7.8325 4.5 8.5 3.825 8.5 3C8.5 2.715 8.425 2.4525 8.2825 2.2275L7 0L5.7175 2.2275C5.575 2.4525 5.5 2.715 5.5 3C5.5 3.825 6.175 4.5 7 4.5ZM10.45 11.9925L9.6475 11.19L8.8375 11.9925C7.8625 12.9675 6.1525 12.975 5.17 11.9925L4.3675 11.19L3.55 11.9925C3.0625 12.48 2.41 12.75 1.72 12.75C1.1725 12.75 0.67 12.5775 0.25 12.2925V15.75C0.25 16.1625 0.5875 16.5 1 16.5H13C13.4125 16.5 13.75 16.1625 13.75 15.75V12.2925C13.33 12.5775 12.8275 12.75 12.28 12.75C11.59 12.75 10.9375 12.48 10.45 11.9925ZM11.5 6.75H7.75V5.25H6.25V6.75H2.5C1.255 6.75 0.25 7.755 0.25 9V10.155C0.25 10.965 0.91 11.625 1.72 11.625C2.11 11.625 2.485 11.475 2.755 11.1975L4.36 9.6L5.9575 11.1975C6.5125 11.7525 7.48 11.7525 8.035 11.1975L9.64 9.6L11.2375 11.1975C11.515 11.475 11.8825 11.625 12.2725 11.625C13.0825 11.625 13.7425 10.965 13.7425 10.155V9C13.75 7.755 12.745 6.75 11.5 6.75Z"
        fill="#D65A31"
      />
    </Svg>
  );
};

export default CakeSvg;
