import React from 'react';
import styled from '@emotion/styled';
import { Field } from 'formik';
import { TextInputProps } from '../../../interfaces/form.interfaces';
import Avatar from '../Avatar';
import { propTypes } from 'react-notification-system';

const Wrapper = styled.span<any>`
  ${({ bgcolor, theme }) => `
    display:flex;
    border-radius: 3px;
    flex-direction:row;
    align-items:center;
    jusify-content:center;
    width: 140px;
    height: 140px;
    border: 1px solid ${bgcolor ? theme.colors[bgcolor] : theme.colors.primary};
    background-color: ${bgcolor ? theme.colors[bgcolor] : theme.colors.primary};
    & input {
    width: 100%;
    padding: 15px;
    border: none;
    background-color:transparent;
    color: ${theme.colors.primary};
    outline:none;
    font-weight: bold;
    display:none;

    & img{
      width: 140px !important;
      height: 140px;
      
    }
  }
`}
`;
const Input = styled(Field)``;

export const ImageInput = (props: TextInputProps): JSX.Element => {
  return (
    <Wrapper bgcolor={props.bgcolor}>
      <img alt="" />
      <Input type="file" {...props} value="" />
    </Wrapper>
  );
};
