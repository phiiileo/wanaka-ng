import React from 'react';
import { IconProps } from '../../interfaces/general.interface';
import { Svg } from './a-style';

const FastForwardSvg = (props: IconProps): JSX.Element => {
  return (
    <Svg width="70" height="60" viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.1717 2.30333C38.085 0.390101 41.1869 0.390101 43.1001 2.30333L67.5958 26.7989C69.509 28.7122 69.509 31.8141 67.5958 33.7273L43.1001 58.223C41.1869 60.1362 38.085 60.1362 36.1717 58.223C34.2585 56.3097 34.2585 53.2078 36.1717 51.2946L57.2032 30.2631L36.1717 9.23173C34.2585 7.31851 34.2585 4.21655 36.1717 2.30333Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.87791 2.30333C3.79114 0.390101 6.89309 0.390101 8.80632 2.30333L33.3019 26.7989C35.2152 28.7122 35.2152 31.8141 33.3019 33.7273L8.80632 58.223C6.89309 60.1362 3.79114 60.1362 1.87791 58.223C-0.0353136 56.3097 -0.0353136 53.2078 1.87791 51.2946L22.9093 30.2631L1.87791 9.23173C-0.0353136 7.31851 -0.0353136 4.21655 1.87791 2.30333Z"
        fill="black"
      />
    </Svg>
  );
};

export default FastForwardSvg;
