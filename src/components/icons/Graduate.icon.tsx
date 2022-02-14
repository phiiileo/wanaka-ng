import { useTheme } from '@emotion/react';
import React from 'react';
import { Svg } from './a-style';

interface IconProps {
  variant?: string;
}
const GraduateSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const { variant } = props;
  const color = variant === 'dark' && theme.type === 'light' ? theme.colors.dark : theme.colors.white;
  return (
    <Svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.75 7.885V10.885L9 13.75L14.25 10.885V7.885L9 10.75L3.75 7.885ZM9 0.25L0.75 4.75L9 9.25L15.75 5.5675V10.75H17.25V4.75L9 0.25Z"
        fill="#828282"
      />
    </Svg>
  );
};

export default GraduateSvg;
