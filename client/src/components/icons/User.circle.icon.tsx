import React from 'react';
import { IconProps } from '../../interfaces';
import { Svg } from './a-style';

const UserCircleSvg = (props: IconProps) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 2.75C9.245 2.75 10.25 3.755 10.25 5C10.25 6.245 9.245 7.25 8 7.25C6.755 7.25 5.75 6.245 5.75 5C5.75 3.755 6.755 2.75 8 2.75ZM8 13.4C6.125 13.4 4.4675 12.44 3.5 10.985C3.5225 9.4925 6.5 8.675 8 8.675C9.4925 8.675 12.4775 9.4925 12.5 10.985C11.5325 12.44 9.875 13.4 8 13.4Z"
        fill="#828282"
      />
    </Svg>
  );
};

export default UserCircleSvg;
