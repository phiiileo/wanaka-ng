import { useTheme } from '@emotion/react';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

const HeartBeat = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#FFD8D6" />
      <g clipPath="url(#clip0_782_10660)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.6093 53.125C33.4437 58.875 39.9343 65.2218 50 71.875C60.0656 65.2218 66.5562 58.875 70.3906 53.125H62.5C62.1879 53.1249 61.8831 53.0314 61.6246 52.8565C61.3662 52.6816 61.1661 52.4334 61.05 52.1437L56.4968 40.7625L51.5031 58.2406C51.4138 58.5541 51.2287 58.8317 50.9738 59.0348C50.7188 59.2378 50.4068 59.3561 50.0813 59.373C49.7558 59.3898 49.4332 59.3045 49.1586 59.1289C48.884 58.9533 48.6712 58.6963 48.55 58.3937L43.4031 45.525L38.8 52.4312C38.6571 52.6449 38.4637 52.82 38.2369 52.941C38.0101 53.062 37.757 53.1252 37.5 53.125H29.6093ZM27.7468 50C17.4187 30.25 38.7812 18.75 49.45 28.5718C49.6375 28.7437 49.8218 28.9218 50 29.1062C50.1763 28.922 50.3598 28.7448 50.55 28.575C61.2187 18.75 82.5812 30.25 72.25 50H63.5531L57.6968 35.3562C57.5756 35.0537 57.3628 34.7966 57.0882 34.621C56.8137 34.4454 56.491 34.3601 56.1655 34.377C55.84 34.3939 55.528 34.5121 55.273 34.7151C55.0181 34.9182 54.833 35.1959 54.7437 35.5093L49.7531 52.9875L45.2 41.6062C45.0939 41.3422 44.9178 41.1121 44.6906 40.9409C44.4634 40.7696 44.1938 40.6636 43.9108 40.6344C43.6278 40.6051 43.3421 40.6537 43.0847 40.7748C42.8273 40.896 42.6078 41.0851 42.45 41.3218L36.6625 50H27.75H27.7468Z"
          fill="#FF5247"
        />
      </g>
      <defs>
        <clipPath id="clip0_782_10660">
          <rect width="50" height="50" fill="white" transform="translate(25 25)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HeartBeat;
