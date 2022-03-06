import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useLocation } from 'react-router-dom';
import { Button } from '../../../components';
import { PublicNavBar } from '../../../components/molecules/NavBars';
import { InitiateWaitlistSignupAction } from '../../../redux/actions';
import heroimage from './../../../assets/images/hero-image.png';

const Wrapper = styled.section<any>`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  padding: 5% 8%;
  margin: 100px 0 0 0;
  min-height: 50vh;
  background-color: #effff1;
  ${({ theme }) => theme.mq.lg`
  margin: 100px 0 0 0;
  min-height: 70vh;
`}
`;

const HeroInnerSection = styled.div<any>`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  ${({ theme }) => theme.mq.lg`
  grid-template-columns: 4fr 5fr;
`}
`;
const HeroHeaderTitle = styled.h1<any>`
  margin: 0px 0 20px 0;
  font-size: 32px;
  text-align: center;
  ${({ theme }) => theme.mq.md`
  padding-right: 5%;
  text-align: left;
  line-height: 80px;
  font-size: 56px;
`}
`;
const HeroHeaderText = styled.p<any>`
  text-align: center;
  font-weight: 600;
  margin: 30px 0 50px 0;
  ${({ theme }) => theme.mq.md`
    font-size: 16px;
    line-height: 24px;
    padding-right: 40%;
    display: block;
`};
`;
const HeaderImageSection = styled.div<any>`
  // display: none;
  ${({ theme }) => theme.mq.lg`
  display: block;
`}
`;
const HeaderTextSection = styled.div<any>`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ButtonWrapper = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.mq.md`
  display: block;
`}
`;
const HeroImage = styled.img<any>`
  width: 140%;
  height: 115%;
  object-fit: cover;
  // object-position: right;
`;
const HeroSection = (): JSX.Element => {
  const dispatch = useDispatch();
  const initialSignup = (referralcode: string) => {
    dispatch(InitiateWaitlistSignupAction({ code: referralcode }));
  };
  const location = useLocation();
  useEffect(() => {
    console.log(location);
    const search = location.search.replace('?', '');
    if (location.search) {
      let splitsearch = search.split('&');
      if (splitsearch.length > 0) {
        splitsearch = splitsearch.filter((e) => e.indexOf('referral=') > -1);
        console.log(splitsearch);
        if (splitsearch.length > 0) {
          const referralraw = splitsearch[0].split('=');
          console.log(referralraw);
          if (referralraw.length > 1) {
            initialSignup(referralraw[1]);
          }
        }
      }
    }
  }, []);
  return (
    <Wrapper className="home-page">
      <HeroInnerSection>
        <HeaderTextSection>
          <HeroHeaderTitle>Fast Groceries and Healthy Recipes at the tap of a button.</HeroHeaderTitle>
          <HeroHeaderText>
            We’ll help you bring your favourite recipes to life. Join our waiting list and get a chance to win N5000
            worth of groceries
          </HeroHeaderText>
          <ButtonWrapper>
            <Button onClick={() => initialSignup('')} size="md">
              Join Waiting List
            </Button>
          </ButtonWrapper>
        </HeaderTextSection>
        <HeaderImageSection>
          <HeroImage src={heroimage} alt="hero image" />
        </HeaderImageSection>
      </HeroInnerSection>
    </Wrapper>
  );
};

export default HeroSection;
