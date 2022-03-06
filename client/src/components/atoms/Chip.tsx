import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { getComputedThemeColor } from '../../utils';

const ChipWrapper = styled.span<any>`
  ${({ theme, bgcolor, fixed, shape, variant, color, disabled }) => `
  position: ${fixed ? `absolute` : `static`};
  display: inline-flex;
  align-items:center;
  justify-content:center;
  border: 1px solid ${disabled ? `grey` : variant === 'outlined' ? theme.colors[color] : `transpatent`};
  top: -10px;
  left: 15px;
  width: 25px;
  height: 25px;
  border-radius: ${shape === 'circle' ? `50%` : shape === 'rounded' ? `6px` : `3px`};
  font-weight: bold;
  color: ${disabled ? `grey` : variant === 'outlined' ? theme.colors[color] : theme.colors.white};
  background-color: ${
    disabled
      ? `grey`
      : variant === 'outlined'
      ? `transparent`
      : bgcolor
      ? theme.colors[bgcolor]
      : theme.colors.secondary
  };
`}
`;
export const Chip = (props: any): JSX.Element => {
  const { text, color } = props;
  return (
    <ChipWrapper {...props} bgcolor={color}>
      {text}
    </ChipWrapper>
  );
};
