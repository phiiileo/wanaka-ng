import React from 'react';
import styled from '@emotion/styled';
import { IComponent } from '../../interfaces';

const Stroke = styled.p<any>`
  color: green;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;
export const StrokedText = (props: IComponent): JSX.Element => {
  return <Stroke {...props}>{props.children}</Stroke>;
};
