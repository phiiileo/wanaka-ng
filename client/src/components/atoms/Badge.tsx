import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
// import { IChip } from '../../interfaces';
import { getComputedThemeColor } from '../../utils';

const ChipWrapper = styled.span<any>`
  ${({ theme, bgcolor, fixed, shape }) => `
  position: ${fixed ? `absolute` : `static`};
  display: inline-flex;
  align-items:center;
  justify-content:center;
  border: 3px solid white;
  top: -10px;
  left: 15px;
  width: 50px;
  height: 25px;
  border-radius: ${shape === 'circle' ? `50%` : shape === 'rounded' ? `6px` : `3px`};
  font-weight: bold;
  color: ${theme.colors.white};
  background-color: ${bgcolor ? theme.colors[bgcolor] : theme.colors.secondary};
`}
`;
export const Badge = (props: any): JSX.Element => {
  const { variant, text, shape } = props;
  const theme = useTheme();
  const bgColor = getComputedThemeColor(variant, theme);
  return (
    <ChipWrapper {...props} bgcolor={variant}>
      {text}
    </ChipWrapper>
  );
};
