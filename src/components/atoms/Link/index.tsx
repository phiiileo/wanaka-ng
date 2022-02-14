import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkProps } from '../../../interfaces/form.interfaces';

const LLink = styled(Link)<any>`
  ${({ theme, variant, color }) => `
        color: ${color ? theme.colors[color] : theme.colors.primary};
        border-bottom: ${
          variant === 'underline' ? `1px solid ${color ? theme.colors[color] : theme.colors.primary}` : 'none'
        };
        text-decoration:none;
    `}
`;
export const GLink = (props: LinkProps): JSX.Element => {
  return <LLink {...props}>{props.children}</LLink>;
};
