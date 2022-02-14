import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

const Flash = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#FFFACF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65 25H45L35 52.5H45L40 75L62.5 42.5H50.0125L65 25Z"
        fill="#FCE300"
      />
    </svg>
  );
};

export default Flash;
