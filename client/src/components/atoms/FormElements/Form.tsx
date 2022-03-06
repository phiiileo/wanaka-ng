import styled from '@emotion/styled';
import { Formik, Form as FormikForm } from 'formik';
import React from 'react';
import { FormProps } from '../../../interfaces/form.interfaces';

export const FormContainer = styled(FormikForm)<any>`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Form = (props: FormProps): JSX.Element => {
  return (
    <Formik initialValues={{}} onSubmit={props.onSubmit}>
      {props.children}
    </Formik>
  );
};
