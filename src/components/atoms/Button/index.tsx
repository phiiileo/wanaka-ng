import React from 'react';
import styled from '@emotion/styled';
import { ButtonProps } from '../../../interfaces';
import Spinner from '../Spinner';

const BButton = styled.button<any>`
  ${({ theme, size, variant, action, color, fullwidth, rounded }) => `
  border-radius: ${rounded ? `50px` : `8px`};
  border: 1.5px solid ${variant === 'outlined' ? theme.colors[color] ?? theme.colors.primary : `transparent`};
  background-color:  ${
    variant === 'outlined'
      ? `transparent`
      : variant === 'white'
      ? theme.colors.white
      : variant === 'secondary'
      ? theme.colors.secondary
      : variant === 'danger'
      ? theme.colors.error
      : variant
      ? theme.colors[variant]
      : theme.colors.primary
  } ;
  color: ${
    action === 'danger'
      ? theme.colors.error
      : color === 'secondary'
      ? theme.colors.secondary
      : color === 'brand'
      ? theme.colors.primary
      : variant === 'white'
      ? theme.colors.black
      : theme.colors.white
  };
  padding: ${size === 'sm' ? `5px 15px` : size === 'md' ? '10px 10px' : `20px`};
  min-width:${fullwidth ? `100%` : size === 'md' ? '150px' : size === 'sm' ? `auto` : `200px`};
  font-size:${size === 'sm' ? `12px` : size === 'md' ? '12px' : `auto`};
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  gap: 10px;
  font-weight:${size === 'sm' ? `300` : size === 'md' ? '600' : `auto`};
  &:disabled{
    opacity:.6;
  }
`}
`;
const Button = (props: ButtonProps): JSX.Element => {
  const { children, loading, ...rest } = props;
  return (
    <BButton {...rest}>
      {loading ? (
        <Spinner
          size={rest.size}
          variant={rest.variant == 'plain' ? rest.variant : rest.variant == 'secondary' ? 'brand' : rest.variant}
        />
      ) : (
        children
      )}
    </BButton>
  );
};

export default Button;
