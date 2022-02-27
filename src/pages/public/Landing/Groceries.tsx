import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useLocation } from 'react-router-dom';
import { Button, SMGoogleIcon, SMTwitterIcon } from '../../../components';
import SMFacebook from '../../../components/icons/SM.FaceBook.icon';
import { PublicNavBar } from '../../../components/molecules/NavBars';
import { InitiateWaitlistSignupAction } from '../../../redux/actions';
import carrot from './../../../assets/images/carrot.png';
import banana from './../../../assets/images/banana.png';
import papper from './../../../assets/images/pepper.png';
import gabbage from './../../../assets/images/gabbage.png';
import tomatoe from './../../../assets/images/tomatoe.png';
import orange from './../../../assets/images/orange.png';
const Wrapper = styled.section`
  min-height: 50vh;
  width: 100%;
  padding: 0% 8%;
  margin: 0px auto 300px auto;
`;

const SectionHeader = styled.h1<any>`
  text-align: center;
  font-size: 48px;
  line-height: 68px;
  margin-bottom: 80px;
`;

const SectionOne = styled.div<any>`
  display: grid;
  gap: 20px;
  margin: 20px 0;
  ${({ theme }) => theme.mq.sm`
  grid-template-columns: 4fr 3fr 4fr;
  `}
`;
const SectionTwo = styled.div<any>`
  display: grid;
  ${({ theme }) => theme.mq.sm`
  grid-template-columns: 3fr 5fr 3fr;
  `}
  gap: 20px;
`;

const CardWrapper = styled.div<any>`
  height: 200px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  background-color: ${({ bgcolor }) => bgcolor || 'grey'};
`;
const Groceries = (): JSX.Element => {
  const rawData = useSelector((state: any) => state.appSettings.waitlist || {});

  console.log(location);
  const ListOne = [
    { id: 1, image: banana, bgcolor: '#FFF4C3' },
    { id: 2, image: tomatoe, bgcolor: '#FFC3C4' },
    { id: 3, image: orange, bgcolor: '#FEE196' },
  ];
  const ListTwo = [
    { id: 4, image: gabbage, bgcolor: '#DDF6B3' },
    { id: 5, image: papper, bgcolor: '#F9C2C6' },
    { id: 6, image: carrot, bgcolor: '#FFCEC0' },
  ];
  return (
    <Wrapper className="groceries-section">
      <SectionHeader>Groceries</SectionHeader>
      <SectionOne>
        {ListOne.map((x) => (
          <CardWrapper key={x.id} bgcolor={x.bgcolor}>
            <img src={x.image} alt="logo" />
          </CardWrapper>
        ))}
      </SectionOne>
      <SectionTwo>
        {ListTwo.map((x) => (
          <CardWrapper key={x.id} bgcolor={x.bgcolor}>
            <img src={x.image} alt="logo" />
          </CardWrapper>
        ))}
      </SectionTwo>
    </Wrapper>
  );
};

export default Groceries;
