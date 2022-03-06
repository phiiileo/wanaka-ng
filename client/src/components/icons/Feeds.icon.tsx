import React from 'react';
import { Svg } from './a-style';
import { useTheme } from '@emotion/react';
import { IconProps } from '../../interfaces/general.interface';

const FeedsSvg = (props: IconProps): JSX.Element => {
  const theme: any = useTheme();
  const { variant } = props;
  const color = variant === 'dark' && theme.type === 'light' ? theme.colors.dark : theme.colors.white;

  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 0.330078V2.45258C5.2725 2.45258 9.5475 6.72758 9.5475 12.0001H11.67C11.67 5.55758 6.4425 0.330078 0 0.330078ZM0 4.57508V6.69758C2.925 6.69758 5.3025 9.07508 5.3025 12.0001H7.425C7.425 7.89758 4.1025 4.57508 0 4.57508Z"
        fill={color}
      />
    </Svg>
  );
};

export default FeedsSvg;
