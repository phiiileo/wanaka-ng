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
  margin: 50px auto 50px auto;
`;
const ReferralSubtitle = styled.div<any>`
  text-align: center;
`;
const ReferralSubtitleHeader = styled.div<any>`
  font-size: 20px;
  width: 60%;
  color: #1a301d;
  margin: 50px auto 20px auto;
  font-weight: 600;
  ${({ theme }) => theme.mq.lg`
  font-size: 15px;
  `}
`;
const ReferralSubtitleText = styled.div<any>`
  font-size: 15px;
  width: 70%;
  margin: 0 auto 50px auto;
  font-weight: 600;
`;
const SectionTitle = styled.h1<any>`
  text-align: center;
  font-size: 30px;
  margin: 10px 0;
  font-weight: 700;
`;

const ReferralLink = styled.div<any>`
  flex-direction: column;
  border-radius: 8px;
  margin-top: 100px;
`;

const ReferralLinkTitle = styled.h3<any>`
  font-weight: 800;
  text-align: center;
  font-size: 30px;
`;
const ReferralLinkText = styled.p<any>`
  font-weight: 600;
  margin: 20px 0;
  text-align: center;
`;

const ReferralLinkContainerWrapper = styled.span<any>`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mq.lg`
  justify-content: space-between;
  flex-direction: column;
  `}
  align-items: center;
`;

const ReferralLinkContainer = styled.div<any>`
  font-weight: 600;
  margin: 40px 0 60px 0;
  background-color: #eff1f0;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  ${({ theme }) => theme.mq.lg`
  flex-direction:row;
  text-align: right;
  justify-content: space-between;
  `}
`;

const ReferralLinkTextButton = styled.span<any>`
  color: #4299ff;
  cursor: pointer;
`;

const ReferralLinkIconWrapper = styled.span<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // gap: 30px;
  margin: 30px 0 0 0px;
  ${({ theme }) => theme.mq.lg`
  margin: 0px 0px 0px 50px;
  `}

  & div {
    margin-left: 40px;
    background-color: #eff1f0;
    border-radius: 50%;
    padding: 10px;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Referral = (): JSX.Element => {
  const rawData = useSelector((state: any) => state.appSettings.waitlist || {});
  console.log(rawData);
  const location = window.location;
  const dispatch = useDispatch();
  const initialSignup = () => {
    dispatch(InitiateWaitlistSignupAction({ code: null }));
  };
  console.log(location);
  const cards = [
    { id: 1, content: 'Get your groceries delivered to you within 25minutes', icon: 'xxx' },
    { id: 2, content: 'Pick your ordered groceries and ready to go', icon: 'xxx' },
    { id: 3, content: 'Learn how to make your favourite meals and get the ingredients with recipes', icon: 'xxx' },
    { id: 4, content: 'Develop a healthy eating habit and keep the body strong', icon: 'xxx' },
  ];

  function copyToClipboard(text: string) {
    // const elem = document.createElement('textarea');
    // elem.value = text;
    // document.body.appendChild(elem);
    // elem.select();
    // document.execCommand('copy');
    // document.body.removeChild(elem);
    navigator.clipboard.writeText(text);
  }
  return (
    <Wrapper className="referral-section">
      <SectionTitle>Sharing Love this Season</SectionTitle>
      <ReferralSubtitle>
        <ReferralSubtitleHeader>
          Enjoy NGN 5000 worth of groceries and a free delivery on your first order{' '}
        </ReferralSubtitleHeader>
        <ReferralSubtitleText>
          Refer as many friends as you can and view your rank on our leaderboard weekly.
        </ReferralSubtitleText>
      </ReferralSubtitle>
      <ReferralLink>
        <ReferralLinkTitle>Referral Link</ReferralLinkTitle>
        <ReferralLinkText>
          You can share your referral link by copying and sending it or sharing it on your social media
        </ReferralLinkText>
        <ReferralLinkContainerWrapper>
          {rawData.response ? (
            <>
              <ReferralLinkContainer>
                <span>
                  {location.origin}?referral={rawData.response.data.code}
                </span>
                <ReferralLinkTextButton
                  onClick={() => copyToClipboard(`${location.origin}?referral=${rawData.response.data.code}`)}
                >
                  Copy Link
                </ReferralLinkTextButton>
              </ReferralLinkContainer>
              <ReferralLinkIconWrapper>
                <div>
                  <SMFacebook />
                </div>
                <div>
                  <SMGoogleIcon />
                </div>
                <div>
                  <SMTwitterIcon />
                </div>
              </ReferralLinkIconWrapper>
            </>
          ) : (
            <div>
              <h3>Register now to get your link</h3> <br />
              <Button size="sm" onClick={() => initialSignup()}>
                Join now
              </Button>
            </div>
          )}
        </ReferralLinkContainerWrapper>
      </ReferralLink>
    </Wrapper>
  );
};

export default Referral;
