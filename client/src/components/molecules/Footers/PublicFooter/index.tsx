import styled from '@emotion/styled';
import React from 'react';
import { BrandLogo, GLink } from '../../../atoms';

const Wrapper = styled.section<any>`
  width: 100%;
  margin: 100px 0;
  border-top: 2px solid grey;
  padding: 100px 0;
`;
const Footer = styled.section<any>`
  max-width: 1640px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 0 20px;

  p {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }

  ${({ theme }) => theme.mq.sm`
  grid-template-columns: 1fr 1fr;

  `}

  ${({ theme }) => theme.mq.md`
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  `}
`;

const SectionTitle = styled.h3<any>`
  margin-bottom: 20px;
  font-size: 30px;
`;

const FooterLogo = styled.div<any>`
  display: flex;
  justify-content: flex-end;
`;
export const PublicFooter = (): JSX.Element => {
  const navigatePage = (path: string): void => {
    const docEls = document.getElementsByClassName(path);
    if (docEls.length < 1) return console.error('No document found with this classname');
    const docEl = docEls[0];
    docEl.scrollIntoView();
  };
  return (
    <Wrapper>
      <Footer>
        <div>
          <SectionTitle>Products</SectionTitle>
          <div>
            <GLink to="/dashboard/investments">
              <p>Investment</p>
            </GLink>
            <GLink to="/client/dashboard/gas-supply">
              <p>Gas Supply</p>
            </GLink>
            <GLink to="/client/dashboard/loans">
              <p>Loan</p>
            </GLink>
            <GLink to="/client/dashboard/logistics-services">
              <p>Logistics Services</p>
            </GLink>
          </div>
        </div>
        <div>
          <SectionTitle>Company</SectionTitle>
          <div>
            <GLink to="" onClick={() => navigatePage('how-it-works')}>
              <p>How It Works</p>
            </GLink>
            <GLink to="" onClick={() => navigatePage('what-we-do')}>
              <p>Who We Are</p>
            </GLink>
            <GLink to="" onClick={() => navigatePage('faq')}>
              <p>FAQs</p>
            </GLink>
          </div>
        </div>
        <div>
          <SectionTitle>Legal</SectionTitle>
          <div>
            <GLink to="/terms">
              <p>Terms</p>
            </GLink>
            <GLink to="/privacy">
              <p>Privacy</p>
            </GLink>
          </div>
        </div>
        <div>
          <SectionTitle>Contacts</SectionTitle>
          <div>
            <GLink to="">
              <p>Phone:</p>
              <p>+234 (0) 811 997 2674</p>
            </GLink>
            <GLink to="">
              <p>Mail:</p>
              <p>info@gasify.com</p>
            </GLink>
          </div>
        </div>
        <FooterLogo>
          <BrandLogo notfix={true} />
        </FooterLogo>
      </Footer>
    </Wrapper>
  );
};
