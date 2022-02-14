import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router';
import { BrandLogoInterface } from '../../../interfaces';
import { BrandLogoIcon, BrandLogoWhiteIcon } from '../../icons';
import logo from './../../../assets/logo.png';
export const BrandContainer = styled.section<any>`
  ${({ position, notfix }) => `
position: ${!notfix ? `fixed` : `static`};
top: 0px;
${!notfix && `left: ${position === 'right' ? `97%;` : ` 3%;`}`}
transition: all 0.5s ease-in-out;
cursor: pointer; 
`}
`;
const Image = styled.img<any>`
  width: auto;
  height: 35px;
  margin: 10px 0 0 0;
`;
const BrandLogo = (props: BrandLogoInterface): JSX.Element => {
  const { color } = props;
  const history = useNavigate();
  const handleRedirect = () => {
    history.bind('/');
  };
  return (
    <BrandContainer notfix={props.notfix} position={props.position} onClick={handleRedirect} color={props.color}>
      {/* {color !== 'white' ? <BrandLogoIcon /> : <BrandLogoWhiteIcon />} */}
      <Image src={logo} alt="" />
    </BrandContainer>
  );
};
export default BrandLogo;
