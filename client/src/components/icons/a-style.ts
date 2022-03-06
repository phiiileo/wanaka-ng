import styled from '@emotion/styled';

export const Svg = styled.svg<any>`
  cursor: pointer;
  &:hover {
    ${({ theme }) => `
    color: ${theme.colors.primary};
    `}
  }
`;
