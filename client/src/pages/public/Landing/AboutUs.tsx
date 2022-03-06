import styled from '@emotion/styled';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Button, FlashIcon, FoodConverIcon, HeartBeatIcon, TruckIcon } from '../../../components';
import { Paper } from '../../../components/atoms/Paper';
import { PublicNavBar } from '../../../components/molecules/NavBars';
import heroimage from './../../../assets/images/hero-image.png';

const Wrapper = styled.section`
  min-height: 90vh;
  width: 100%;
  padding: 8% 0;
`;

const SectionCardWrapper = styled.div<any>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 70px;
  width: 80%;
  margin: 80px auto;
  ${({ theme }) => theme.mq.md`
  grid-template-columns: 1fr 1fr;
  width: 720px;
  `}
`;
const HeroHeaderTitle = styled.h1<any>`
  margin: 0px 0 20px 0;
  font-size: 56px;
  padding-right: 5%;
  line-height: 80px;
`;
const SectionTitle = styled.h1<any>`
  text-align: center;
  font-size: 40px;
  font-family: 800;
`;
const HeaderImageSection = styled.div<any>``;
const CardText = styled.div<any>`
  font-weight: 600;
  margin-top: 20px;
  line-height: 30px;
`;
const Card = styled.div<any>`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  height: 328px;
  text-align: center;
  padding: 10px;
`;
const AboutUs = (): JSX.Element => {
  const cards = [
    { id: 1, content: 'Get your groceries delivered to you within 25minutes', icon: <FlashIcon /> },
    { id: 2, content: 'Pick your ordered groceries and ready to go', icon: <TruckIcon /> },
    {
      id: 3,
      content: 'Learn how to make your favourite meals and get the ingredients with recipes',
      icon: <FoodConverIcon />,
    },
    { id: 4, content: 'Develop a healthy eating habit and keep the body strong', icon: <HeartBeatIcon /> },
  ];
  return (
    <Wrapper className="about-us">
      <SectionTitle>About Us</SectionTitle>
      <SectionCardWrapper>
        {cards.map((data) => (
          <Paper key={data.id}>
            <Card>
              <p>{data.icon}</p>
              <CardText>{data.content}</CardText>
            </Card>
          </Paper>
        ))}
      </SectionCardWrapper>
    </Wrapper>
  );
};

export default AboutUs;
