import React, { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IComponent, IRoles, IUserStatus } from '../interfaces';
import { GetReports } from '../redux/actions';
import { getMaximumValue } from '../utils';
import * as T from './../redux/types';
const defaultContext: any = {};

export const AppContext = createContext(defaultContext);

export const AppContextProvider = (props: IComponent) => {
  const dispatch = useDispatch();
  const fetchReportsHandler = (type: string) => dispatch(GetReports(type));
  const { data: userRoles } = useSelector((state: any) =>
    state.appSettings?.reports ? state.appSettings?.reports[T.USERROLES] || {} : {},
  );
  const { data: userStatus } = useSelector((state: any) => state.appSettings?.reports[T.USERSTATUSES] || {});
  const { AppState = {} } = useSelector((state: any) => state.appSettings);
  const roles: IRoles[] = userRoles || [];
  const userStatuses: IUserStatus[] = userStatus || [];
  const getRole = (target: any) => {
    const isArray = Array.isArray(target);
    if (isArray) {
      const incomingRoles = getMaximumValue(target);
      return roles.filter((data) => data.value === incomingRoles)[0]?.name;
    } else {
      return roles.filter((data) => data.value === Number(target))[0]?.name;
    }
  };

  const getUserStatus = (target: number) => {
    return userStatuses.filter((data) => data.value === Number(target))[0]?.name;
  };

  const methods = {
    getRole,
    getUserStatus,
  };
  useEffect(() => {
    // fetchReportsHandler(T.USERROLES);
    // fetchReportsHandler(T.PACKAGETYPES);
    // fetchReportsHandler(T.PACKAGESTATUSES);
    // fetchReportsHandler(T.USERSTATUSES);
    // fetchReportsHandler(T.REQUESTTYPES);
    // fetchReportsHandler(T.REQUESTSTATUSES);
  }, []);
  return <AppContext.Provider value={{ AppState, methods }}>{props.children}</AppContext.Provider>;
};
