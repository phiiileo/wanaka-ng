import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

const FoodCover = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#EBFFEE" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.8218 66.7246H21.1353C20.0194 66.7246 19.1218 67.577 19.1218 68.6228C19.1218 69.677 20.0235 70.5293 21.1353 70.5293H82.8218C83.9376 70.5293 84.8394 69.677 84.8394 68.6228C84.8394 67.577 83.9335 66.7246 82.8218 66.7246Z"
        fill="#019468"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.0053 34.2983C36.1977 34.2983 23.3876 46.6842 23.3876 61.9607H80.6229C80.6271 46.6842 67.8088 34.2983 52.0053 34.2983Z"
        fill="#019468"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M47.9412 29.353H56.0488V37.4607H47.9412V29.353Z" fill="#019468" />
    </svg>
  );
};

export default FoodCover;
