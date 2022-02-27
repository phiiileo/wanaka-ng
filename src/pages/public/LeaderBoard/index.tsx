import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { IComponent } from '../../../interfaces';
import { useAlert } from '../../../hooks';
import { getRandomNumber } from '../../../utils';
import { Button } from '../../../components';
import { Svg } from '../../../components/icons/a-style';
import { useNavigate } from 'react-router-dom';
import { PublicNavBar } from '../../../components/molecules/NavBars';
import Referral from '../Landing/Referral';
import Subscription from '../Landing/Subscription';
import LeaderBoardTable from './LeaderBoardTable';
import { useDispatch } from 'react-redux';
import { GetLeaderBoard } from '../../../redux/actions/waitlist.action';

const Wrapper = styled.section<any>`
  width: 100%;
  height: 100vh;
  padding: 8%;
`;
const PageTitle = styled.h1<any>`
  margin-top: 10%;
  font-size: 35px;
  text-align: center;
  & span {
    color: grey;
  }
`;
const LeaderBoard = (props: IComponent): JSX.Element => {
  const { user = false, comingup } = props;
  const navigate = useNavigate();
  return (
    <Wrapper>
      <PublicNavBar />

      <PageTitle>
        Leaderboard - <span>Wanaka Winners</span>
      </PageTitle>
      <LeaderBoardTable />
      <Referral />
      <Subscription />
    </Wrapper>
  );
};

export default LeaderBoard;
