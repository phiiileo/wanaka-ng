import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { Button } from '../../..';
import { AuthUser } from '../../../../hooks';
import { LOGOUTREQUEST } from '../../../../redux/types';
import { RoutePaths } from '../../../../router/routes';
import { BrandLogo, GLink } from '../../../atoms';
import { HamburgerIcon, UserIcon } from '../../../icons';

const Wrapper = styled.section<any>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 8%;
  // max-width: 1640px;
  // border: 1px solid red;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: white;
  // width: 200%;
`;
const MenuWrapper = styled.div<any>`
  //   display: flex;
  padding: 30px 0;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  text-align: center;
  top: 50px;
  z-index: 1;
  background-color: white;
  transition: all 0.3s ease-in-out;
  opacity: ${({ show }) => (show ? `1` : `0`)};

  ${({ theme }) => theme.mq.lg`
  display: flex;
  position: static;
  opacity: 1;
  `}
`;
const MenuItem = styled.div<any>`
  margin-left: 40px;
  font-size: 16px;
  // color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  //   margin: 10px 0;
`;
const Menu = styled.p<any>`
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  margin: 10px 0;
  cursor: pointer;
  color: ${({ theme, active }) => (active ? theme.colors.primary : 'black')};
  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const MenuToggler = styled.div<any>`
  //   position: absolute;
  ${({ theme }) => theme.mq.lg`
display: none;
`}
`;
export const PublicNavBar = (): JSX.Element => {
  const user = AuthUser();
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const ToggleNav = () => {
    setOpenMenu(!openMenu);
  };
  const location = useLocation();
  const naviagate = useNavigate();
  // const navigatePage = (path: string): void => {
  //   naviagate(path);
  // };
  const navigatePage = (path: string): void => {
    const docEls = document.getElementsByClassName(path);
    if (docEls.length < 1) {
      naviagate('/');
      setTimeout(() => {
        navigatePage(path);
      }, 100);
      return;
      // console.error('No document found with this classname');
    }
    const docEl = docEls[0];
    docEl.scrollIntoView();
  };
  const logout = (): void => {
    dispatch({
      type: LOGOUTREQUEST,
    });
  };
  // useEffect(() => {
  //   const docEls = document.getElementsByClassName('public-nav');
  //   if (docEls.length < 1) return console.error('No document found with this classname');
  //   const docEl = docEls[0];
  //   document.addEventListener('scroll', function () {
  //     const scrollTop = docEl.getBoundingClientRect().top;
  //     if (scrollTop < 50) {
  //       // absolute position
  //     } else {
  //       //static position
  //     }
  //   });
  // }, []);
  return (
    <Wrapper className="public-nav">
      <div>
        <BrandLogo notfix={true} />
      </div>
      <MenuToggler onClick={ToggleNav}>
        <HamburgerIcon variant="brand" />
      </MenuToggler>
      <MenuWrapper show={openMenu}>
        <MenuItem onClick={() => navigatePage('home-page')}>
          <Menu active={location.pathname == '/'}>Home</Menu>
        </MenuItem>
        <MenuItem onClick={() => navigatePage('about-us')}>
          <Menu active={location.pathname == '/about'}>About Us</Menu>
        </MenuItem>
        <MenuItem onClick={() => navigatePage('groceries-section')}>
          <Menu active={location.pathname == '/groceries'}>Groceries</Menu>
        </MenuItem>
        <MenuItem onClick={() => navigatePage('take-survey')}>
          <Menu active={location.pathname == '/about'}>Take Survey</Menu>
        </MenuItem>
        {user?.id ? (
          <>
            <MenuItem>
              <GLink to="" onClick={logout}>
                <Menu>Logout</Menu>
              </GLink>
            </MenuItem>
          </>
        ) : (
          <>
            {/* <MenuItem>
              <GLink to={RoutePaths.LOGIN}>
                <Menu>Login</Menu>
              </GLink>
            </MenuItem> */}
            <MenuItem>
              <Button onClick={() => naviagate(RoutePaths.LEADERBOARD)} size="md" variant="primary" color="primary">
                Leaderboard / Referrals
              </Button>
            </MenuItem>
          </>
        )}
      </MenuWrapper>
    </Wrapper>
  );
};
