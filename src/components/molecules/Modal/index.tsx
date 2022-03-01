import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ModalContext } from '../../../contexts';
import { IComponent } from '../../../interfaces';
import { ADDPACKAGESUCCESSFUL } from '../../../redux/types/package.types';
import { CloseIcon } from '../../icons';
import { WaitlistForm } from '../../organisms/WaitlistForm';
import { CongratulationModal } from '../CongratulationModal';
// import { SuccessActionTab } from '../../organisms/SideMenuContents/common/SuccessResult';
import * as T from './../../../redux/types';
import { OPENSUCCESSMODAL, WAITLISTFORM } from './../../../redux/types';
const Wrapper = styled.section<any>`
  margin-top: 100px;
  ${({ opened }) => `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e3e8e37c;
  z-index: 5;
  display:flex;
  justify-content: center;
  align-items:center;
  transition: all 0.5s ease-in-out;
  transform: ${opened ? 'scale(1)' : `scale(0.0001)`}
  `}
`;
const CloseButton = styled.div<any>`
  position: fixed;
  top: 50px;
  right: 50px;
  // border: 1px solid red;
  color: red;
  padding: 10px;
  width: 30px;
  height: 30px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  border-radius: 3px;
  cursor: pointer;
  z-index: 9999999999999;
`;
const Content = styled.section<any>`
  background-color: white;
  max-height: 80vh;
  max-width: 80vw;
  overflow: auto;
  border-radius: 8px;
`;
export const Modal = (props: IComponent): JSX.Element => {
  const { closeModal } = useContext(ModalContext);
  const { modalState = {} } = useSelector((state: any) => state.appSettings);
  const getComponent = () => {
    let component;
    console.log(modalState.component);
    switch (modalState.component) {
      case ADDPACKAGESUCCESSFUL:
        return (component = <h1>Hello WOrld</h1>);
      case WAITLISTFORM:
        return (component = <WaitlistForm data={modalState.data} />);
      case OPENSUCCESSMODAL:
        return (component = <CongratulationModal />);
      default:
        break;
    }
  };
  return (
    <Wrapper opened={modalState.isOpened}>
      <CloseButton onClick={closeModal}>
        <CloseIcon variant="error" />
        {/* Close */}
      </CloseButton>
      <Content>
        {props.children}
        {getComponent()}
      </Content>
    </Wrapper>
  );
};
export default Modal;
