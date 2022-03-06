import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { Svg } from './a-style';

export const LogoutSvg = (props: IconProps) => {
  const theme: any = useTheme();
  const { variant } = props;
  const color = variant === 'dark' && theme.type === 'light' ? theme.colors.dark : theme.colors.white;

  return (
    <Svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.22144 7.55049L5.55504 12.994C6.03125 13.4801 6.85669 13.1398 6.85669 12.4432V9.3326H11.1744C11.5966 9.3326 11.9363 8.9859 11.9363 8.55495V5.44436C11.9363 5.01341 11.5966 4.66671 11.1744 4.66671H6.85669V1.55612C6.85669 0.862713 6.03443 0.519252 5.55504 1.00528L0.22144 6.44882C-0.0738125 6.7534 -0.0738125 7.24591 0.22144 7.55049ZM9.90446 12.832V11.5359C9.90446 11.3221 10.0759 11.1471 10.2854 11.1471H12.9522C13.5142 11.1471 13.9682 10.6838 13.9682 10.1103V3.88906C13.9682 3.31555 13.5142 2.8522 12.9522 2.8522H10.2854C10.0759 2.8522 9.90446 2.67723 9.90446 2.46337V1.16729C9.90446 0.953439 10.0759 0.778468 10.2854 0.778468H12.9522C14.6349 0.778468 16 2.17176 16 3.88906V10.1103C16 11.8276 14.6349 13.2208 12.9522 13.2208H10.2854C10.0759 13.2208 9.90446 13.0459 9.90446 12.832Z"
        fill={color}
      />
    </Svg>
  );
};

export default LogoutSvg;
