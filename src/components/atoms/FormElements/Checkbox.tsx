import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Field } from 'formik';
import { CheckboxProps } from '../../../interfaces/form.interfaces';

const Wrapper = styled.span<any>`
  ${({ bgcolor, theme }) => `
  // display:flex;
  // align-items: flex-start;
  // justify-content: flex-start;
`}
`;
const ChecboxIcon = styled.div<any>`
  ${({ theme }) => `
  display: inline-flex;
  cursor: pointer;
  border: 1px solid ${theme.colors.primary};
`}
`;
const Box = styled.div<any>`
  ${({ theme, checked }) => `
    background-color:  ${checked && theme.colors.primary};
    border-radius: 1px;
    width: 12px;
    height: 12px;
    margin: 2px;
  
`}
`;
const Input = styled(Field)`
  display: none;
`;
const Text = styled.span<any>`
  margin-left: 10px;
  font-weight: light;
`;
export const Checkbox = (props: CheckboxProps): JSX.Element => {
  const [checked, setCheck] = useState(props.checked || false);
  const handleChecks = (): void => {
    setCheck(!checked);
    const name = props.name || 'value';
    const value = {
      target: {
        name: name,
        value: !checked,
      },
    };
    props.onChange && props.onChange(value);
  };
  useEffect(() => {
    setCheck(props?.checked || false);
  });
  return (
    <Wrapper>
      <ChecboxIcon onClick={handleChecks} checked={checked}>
        <Box checked={checked}></Box>
      </ChecboxIcon>
      <Input type="checkbox" checked={checked} name={props.name || 'value'} />
      <Text>{props.children}</Text>
    </Wrapper>
  );
};
