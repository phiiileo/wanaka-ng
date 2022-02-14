import styled from '@emotion/styled';
import { Button } from '../..';

export const WaitListFormWrapper = styled.section<any>`
  //   padding: 5% 8%;
  display: grid;
  grid-template-columns: 1fr;
  ${({ theme }) => theme.mq.md`
  grid-template-columns: 1fr 1fr;
  `}
`;
export const WaitListFormContainer = styled.div<any>`
  padding: 8%;
`;
export const WaitListFormTitle = styled.h1<any>`
  font-weight: 800;
  font-size: 25px;
`;
export const FormWrapper = styled.section<any>`
  //   border: 1px solid grey;
  //   border-right: none;
  //   border-left: none;
  padding: 40px 0;
  //   margin: 40px 0;
`;
export const FormControlGroup = styled.section<any>`
  margin: 15px 0;
`;

export const ActionButton = styled(Button)`
  width: 100%;
  padding: 15px 0;
  //   margin: 20px 0;
`;

export const Column = styled.div<any>`
  display: grid;
  ${({ theme, col }) => theme.mq.md`
      grid-template-columns: repeat(${col}, 1fr);
      gap: 20px;
`};
`;

export const FormImageWrapper = styled.div<any>`
  display: none;
  ${({ theme }) => theme.mq.md`
 display: block;
  `}
`;
export const FormImage = styled.img<any>`
  height: 100%;
`;
