import styled from '@emotion/styled';
import React from 'react';
import { IComponent } from '../../interfaces';
import Spinner from './Spinner';

const Wrapper = styled.section<any>`
  min-height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PageLoader = (props: IComponent): JSX.Element => {
  return (
    <Wrapper>
      <Spinner variant={props.variant || 'brand'} />
    </Wrapper>
  );
};
