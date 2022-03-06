import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.section<any>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 1px 1px 30px #e9e9e9;
  overflow: auto;
  ${({ fullwidth, minwidth }) => (fullwidth || minwidth) && `min-width: ${minwidth ?? `100%`}`};
  ${({ span }) => span && `grid-column: ${span}`};
`;
export const Paper = (props: any): JSX.Element => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};
