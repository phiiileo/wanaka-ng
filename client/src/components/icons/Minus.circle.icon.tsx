import React from 'react';
import { IconProps } from '../../interfaces';
import { Svg } from './a-style';

const MinusCircleSvg = (props: IconProps) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM11.75 8.75H4.25V7.25H11.75V8.75Z"
        fill="#828282"
      />
    </Svg>
  );
};

export default MinusCircleSvg;
