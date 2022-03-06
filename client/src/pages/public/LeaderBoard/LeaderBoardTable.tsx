import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { IComponent } from '../../../interfaces';
import { useAlert } from '../../../hooks';
import { getDateParts, getRandomNumber } from '../../../utils';
import { Button, Spinner } from '../../../components';
import { Svg } from '../../../components/icons/a-style';
import { useNavigate } from 'react-router-dom';
import { PublicNavBar } from '../../../components/molecules/NavBars';
import Referral from '../Landing/Referral';
import Subscription from '../Landing/Subscription';
import orange from './../../../assets/logo-only.png';
import { useDispatch } from 'react-redux';
import { GetLeaderBoard } from '../../../redux/actions/waitlist.action';

const Wrapper = styled.section<any>`
  overflow: auto;
  height: 80vh;
`;
const Table = styled.table<any>`
  width: 100%;
  margin: 5% auto;
  border: 0.5px solid rgba(178, 185, 179, 0.5);
  border-radius: 15px;
  stroke: Solid rgba(178, 185, 179, 0.5);
`;
const THeader = styled.tr<any>`
  background-color: rgba(178, 185, 179, 0.5);
`;
const Tr = styled.tr<any>``;
const Th = styled.th<any>`
  padding: 10px 30px;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
`;
const Td = styled.td<any>`
  padding: 10px 30px;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
`;
const Avatar = styled.img<any>`
  width: 50px;
  height: 50px;
  object-fit: contain;
  object-position: left;
  // border: 0.5px solid rgba(178, 185, 179, 0.5);
  border-radius: 100%;
`;
const NameCard = styled.div<any>`
  display: flex;
  align-items: center;
  // justify-content: space-between;
  max-width: 300px;

  & p {
    margin-left: 20px;
  }
`;

const SpinnerWrapper = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
`;
const Position = styled.div<any>`
  border-radius: 100%;
  width: 30px;

  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ value }) => `
    color: ${value <= 3 ? `white` : `black`};
    background-color: ${value == 1 ? `#009918` : value == 2 ? '#FFD808' : value == 3 ? `#FF5247` : ``};
  `}
`;
const LeaderBoardTable = (props: IComponent): JSX.Element => {
  const { user = false, comingup } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getLeaderboard = (cb: any) => dispatch(GetLeaderBoard(cb));

  const [users, setUsers] = useState<any>([]);
  const [loading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getLeaderboard((err: any, data: any) => {
      if (data) {
        console.log(data);
        setUsers(data.data);
      } else {
        console.error(err);
      }
    });
  }, []);

  const alert = useAlert();
  const processDate = (date: string) => {
    const d = getDateParts(date, date);
    return `${d.day}.${d.month}.${d.year}`;
  };
  return (
    <Wrapper>
      {loading && users.length < 1 ? (
        <SpinnerWrapper>
          <Spinner variant="brand" size="lg" />
        </SpinnerWrapper>
      ) : (
        <Table>
          <THeader>
            <Th>#</Th>
            <Th>Name</Th>
            <Th>Location</Th>
            <Th>Date</Th>
          </THeader>
          {users.map((x: any, index: number) => (
            <Tr key={index}>
              <Td>
                <Position value={index + 1}>{index + 1}</Position>
              </Td>
              <Td>
                <NameCard>
                  <Avatar src={orange} />
                  <p>{x.customer_name}</p>
                </NameCard>
              </Td>
              <Td>{x.location}</Td>
              <Td>{processDate(x.date_created)}</Td>
            </Tr>
          ))}
        </Table>
      )}
    </Wrapper>
  );
};

export default LeaderBoardTable;
