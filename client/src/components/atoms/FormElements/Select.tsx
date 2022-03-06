import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Field } from 'formik';
import { CheckboxProps, SelectProps } from '../../../interfaces/form.interfaces';

const Wrapper = styled.span<any>`
  ${({ bgcolor, theme }) => `
  border: 1px solid ${bgcolor ? theme.colors[bgcolor] : `transparent`};
  background-color: ${bgcolor && theme.colors[bgcolor]};
  ${bgcolor && `padding: 16px 0`};
  `}
`;

const Input = styled.select<any>`
  border: none;
  width: 100%;
  height: 100%;
  font-weight: bold;
  padding: 10px;
  background-color: transparent;
  outline: none;
`;

export const Select = (props: SelectProps): JSX.Element => {
  const [value, setValue] = useState(props.value);
  const handleChecks = (event: any): void => {
    const { name, value } = event.target;
    setValue(value);
    const _value = {
      target: {
        name: name,
        value: value,
      },
    };
    props.onChange && props.onChange(_value);
  };
  return (
    <Wrapper bgcolor={props.bgcolor}>
      <Input {...props} value={value} onChange={handleChecks} name={props.name} id="">
        {props.options?.map((data) => (
          <option key={Math.random()} value={data.value || data.code}>
            {data.text || data.name}
          </option>
        ))}
      </Input>
    </Wrapper>
  );
};
