import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.p<any>`
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 10px;
`;
export const Label = (props: any): JSX.Element => {
  return <Wrapper>{props.children}</Wrapper>;
};
