import styled from '@emotion/styled';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { PublicNavBar } from '../../../components/molecules/NavBars';
import AboutUs from './AboutUs';
import HeroSection from './HeroSection';
import Referral from './Referral';
import Subscription from './Subscription';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // padding: 50px 0;
  // border: 2px solid red;
`;
const Landing = (): JSX.Element => {
  return (
    <Wrapper>
      <PublicNavBar />
      <HeroSection />
      <AboutUs />
      <Referral />
      <Subscription />
    </Wrapper>
  );
};

export default Landing;
