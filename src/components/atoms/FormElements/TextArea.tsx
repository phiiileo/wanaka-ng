import React from 'react';
import styled from '@emotion/styled';
import { Field } from 'formik';
import { TextInputProps } from '../../../interfaces/form.interfaces';

const Wrapper = styled.span<any>`
  ${({ bgcolor, theme }) => `
    display:flex;
    border-radius: 3px;
    flex-direction:row;
    align-items:center;
    width: 100%;
    padding-left:15px;
    border: 1px solid ${bgcolor ? theme.colors[bgcolor] : theme.colors['light.green']};
    background-color: ${bgcolor && theme.colors[bgcolor]};
    & textarea {
    width: 100%;
    padding: 15px;
    border: none;
    background-color:transparent;
    color: ${theme.colors.primary};
    outline:none;
    font-weight: bold;
::placeholder {
  color:  ${theme.colors.primary};
  font-weight: 500;
}
}
`}
`;
const Input = styled.textarea``;
export const TextArea = (props: TextInputProps): JSX.Element => {
  return (
    <Wrapper bgcolor={props.bgcolor}>
      <Input type="text" placeholder="Enter text here..." {...props} />
    </Wrapper>
  );
};
