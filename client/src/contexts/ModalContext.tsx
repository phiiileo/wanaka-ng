import React, { createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../components';
import { IComponent } from '../interfaces';
import { CLOSEMODAL } from '../redux/types';
// import * as T from './../redux/types';
const defaultContext: any = {};
export const ModalContext = createContext(defaultContext);

export const ModalContextProvider = (props: IComponent) => {
  const dispatch = useDispatch();
  const { modalState = {} } = useSelector((state: any) => state.appSettings);
  const closeModal = (target: string) => {
    // console.log(target);
    dispatch({
      type: CLOSEMODAL,
    });
  };
  return (
    <ModalContext.Provider value={{ closeModal }}>
      <Modal opened={modalState.isOpened}></Modal>
      {props.children}
    </ModalContext.Provider>
  );
};
