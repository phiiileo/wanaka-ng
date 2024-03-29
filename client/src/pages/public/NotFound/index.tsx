import React from 'react';
import styled from '@emotion/styled';
import { IComponent } from '../../../interfaces';
import { useAlert } from '../../../hooks';
import { getRandomNumber } from '../../../utils';
import { Button } from '../../../components';
import { Svg } from '../../../components/icons/a-style';
import { useNavigate } from 'react-router-dom';
import { PublicNavBar } from '../../../components/molecules/NavBars';

const Wrapper = styled.section<any>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h1 {
    margin-bottom: 50px;
  }
`;

const Icon = styled.div<any>`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  margin-bottom: 50px;
  & svg {
    animation-name: spin;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;
const NotFound = (props: IComponent): JSX.Element => {
  const { user = false, comingup } = props;
  const navigate = useNavigate();
  const alert = useAlert();
  const alertSomething = () => {
    const number = getRandomNumber(1, 10);
    if (number < 3) {
      alert.success('Someone out there waits for you');
    } else if (number >= 3 && number <= 6) {
      alert.warning('Things are not really as bad as they seem');
    } else {
      alert.error('This is all shades of bad');
    }
  };
  return (
    <Wrapper>
      <PublicNavBar />
      <div>
        <Button onClick={alertSomething} variant="outlined" color="secondary" size="md">
          Tell me Something
        </Button>
        <br />
        <br />
        <br />
      </div>
      <Icon>
        <Svg width="100" height="100" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.5726 8.735C13.6026 8.495 13.6251 8.255 13.6251 8C13.6251 7.745 13.6026 7.505 13.5726 7.265L15.1551 6.0275C15.2976 5.915 15.3351 5.7125 15.2451 5.5475L13.7451 2.9525C13.6551 2.7875 13.4526 2.7275 13.2876 2.7875L11.4201 3.5375C11.0301 3.2375 10.6101 2.99 10.1526 2.8025L9.86762 0.815C9.84512 0.635 9.68762 0.5 9.50012 0.5H6.50012C6.31262 0.5 6.15512 0.635 6.13262 0.815L5.84762 2.8025C5.39012 2.99 4.97012 3.245 4.58012 3.5375L2.71262 2.7875C2.54012 2.72 2.34512 2.7875 2.25512 2.9525L0.755124 5.5475C0.657624 5.7125 0.702624 5.915 0.845124 6.0275L2.42762 7.265C2.39762 7.505 2.37512 7.7525 2.37512 8C2.37512 8.2475 2.39762 8.495 2.42762 8.735L0.845124 9.9725C0.702624 10.085 0.665124 10.2875 0.755124 10.4525L2.25512 13.0475C2.34512 13.2125 2.54762 13.2725 2.71262 13.2125L4.58012 12.4625C4.97012 12.7625 5.39012 13.01 5.84762 13.1975L6.13262 15.185C6.15512 15.365 6.31262 15.5 6.50012 15.5H9.50012C9.68762 15.5 9.84512 15.365 9.86762 15.185L10.1526 13.1975C10.6101 13.01 11.0301 12.755 11.4201 12.4625L13.2876 13.2125C13.4601 13.28 13.6551 13.2125 13.7451 13.0475L15.2451 10.4525C15.3351 10.2875 15.2976 10.085 15.1551 9.9725L13.5726 8.735ZM8.00012 10.625C6.55262 10.625 5.37512 9.4475 5.37512 8C5.37512 6.5525 6.55262 5.375 8.00012 5.375C9.44762 5.375 10.6251 6.5525 10.6251 8C10.6251 9.4475 9.44762 10.625 8.00012 10.625Z"
            fill={'#019468'}
          />
        </Svg>
      </Icon>
      {!user && !comingup && <h1>Huh!!! Looks like you made a wrong turn!</h1>}
      {user && !comingup && <h1>404: USER NOT FOUND</h1>}
      {comingup && <h1>304: COMING UP SOON...</h1>}
      <Button size="md" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </Wrapper>
  );
};

export default NotFound;
