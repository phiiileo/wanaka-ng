import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, CheckIcon, CheckMarkIcon, CheckThinIcon } from '../..';

const Wrapper = styled.section<any>`
  width: 100%;
  padding: 8%;
  min-width: 300px;
  border-radius: 50px;
  text-align: center;
  ${({ theme }) => theme.mq.sm`
  min-width: 500px;

  `}
`;

const Title = styled.h1<any>`
  font-size: 20px;
  padding: 20px 0;
`;
const Text = styled.h1<any>`
  font-size: 16px;
  line-height: 24px;
  color: rgba(26, 48, 29, 0.8);
  padding: 20px 0;
`;
const ActionButton = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReferralLink = styled.span<any>`
  font-size: 15px;
  font-weight: 600;
  display: block;
  color: ${({ theme }) => theme.colors.primary};
  margin: 20px 0;
`;

export const CongratulationModal = (): JSX.Element => {
  const rawData = useSelector((state: any) => state.appSettings.waitlist || {});
  console.log(rawData);
  const location = window.location;
  const [showcode, setShowCode] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const code = `${location.origin}?referral=${rawData.response.data.code}`;
  const handleShowCode = () => {
    if (!showcode) {
      setShowCode(true);
    } else {
      navigator.clipboard.writeText(code);
    }
  };
  return (
    <Wrapper>
      <CheckThinIcon />
      <Title>Congratulations</Title>
      <Text>You have successfully joined our waiting list</Text>
      {showcode && <ReferralLink>{code}</ReferralLink>}
      <ActionButton>
        <Button onClick={handleShowCode} fullwidth size="md">
          {!showcode ? `View your referral link` : `Copy Link`}
        </Button>
      </ActionButton>
    </Wrapper>
  );
};
