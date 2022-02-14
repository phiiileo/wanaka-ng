import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { IconProps } from '../../interfaces';
import { getComputedThemeColor, getSize } from '../../utils';
import { Svg } from './a-style';

const Wrapper = styled.span<any>`
  ${({ color, size }) => `
  color: ${color};
  font-size: ${size};
  `}
`;
const TextIcon = (props: IconProps) => {
  const theme: any = useTheme();
  const variant: any = props.variant;
  const color = getComputedThemeColor(variant, theme);
  const size = getSize(props.size);
  return (
    <Wrapper color={color} size={size}>
      {props.children}
    </Wrapper>
  );
};

export default TextIcon;
