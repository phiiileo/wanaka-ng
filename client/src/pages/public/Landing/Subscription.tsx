import styled from '@emotion/styled';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Button } from '../../../components';
import { PublicNavBar } from '../../../components/molecules/NavBars';
import heroimage from './../../../assets/images/hero-image.png';

const Wrapper = styled.section`
  padding: 5% 8%;
  background-color: #000;
  width: 100%;
  color: #fff;
  text-align: center;
  margin-top: 0px;
`;

const HeroInnerSection = styled.div<any>`
  display: flex;
  justify-content: center;
`;
const HeroHeaderText = styled.h3<any>`
  margin: 30px 0 50px 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;
const Subscription = (): JSX.Element => {
  const openNewPage = () => {
    const _path = 'https://forms.gle/c9P1ZEu5hyi3fvJz5';
    window.open(_path, '_blank');
    // navigate(_path);
  };
  return (
    <Wrapper className="take-survey">
      <HeroHeaderText>Now get extra points on the leaderboard by taking the survey</HeroHeaderText>
      <HeroInnerSection>
        <Button onClick={() => openNewPage()} variant="outlined">
          Take Survey
        </Button>
      </HeroInnerSection>
    </Wrapper>
  );
};

export default Subscription;
