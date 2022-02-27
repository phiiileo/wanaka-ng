import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useLocation } from 'react-router-dom';
import { Button, SMGoogleIcon, SMTwitterIcon } from '../../../components';
import SMFacebook from '../../../components/icons/SM.FaceBook.icon';
import { PublicNavBar } from '../../../components/molecules/NavBars';
import { InitiateWaitlistSignupAction } from '../../../redux/actions';
import heroimage from './../../../assets/images/hero-image.png';

const Wrapper = styled.section`
  min-height: 50vh;
  width: 100%;
  padding: 0% 8%;
  margin: 10px auto 20px auto;
`;

const VideoContainer = styled.div<any>`
  border: 1px solid grey;
  height: 300px;
  max-width: 700px;
  margin: 0 auto;
`;

const Iframe = styled.iframe<any>`
  height: 100%;
  width: 100%;
`;

const VideoSection = (): JSX.Element => {
  const rawData = useSelector((state: any) => state.appSettings.waitlist || {});
  console.log(rawData);
  const location = window.location;
  const dispatch = useDispatch();
  const initialSignup = () => {
    dispatch(InitiateWaitlistSignupAction({ code: null }));
  };
  return (
    <Wrapper className="video-section">
      <VideoContainer>
        <Iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0&loop=1"></Iframe>
      </VideoContainer>
    </Wrapper>
  );
};

export default VideoSection;
