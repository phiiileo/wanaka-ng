import { IFunction } from '../../interfaces';
import api from '../../services/api';
import { throwError } from '../../utils';
import * as T from './../types';
import { WAITLISTFORM } from './../types';
export const fetchData =
  (payload: any, cb: IFunction) =>
  async (dispatch: IFunction): Promise<any> => {
    dispatch({
      type: T.SIGNINREQUEST,
    });
    const res = await api.createUser(payload);
    try {
      if (res.status === 200 || res.status === 201 || res.status === 204) {
        dispatch({
          type: T.SIGNUPSUCCESS,
          payload: res.data,
        });
        cb(null, res.data);
      } else {
        const error: any = res?.data;
        throw new Error(error?.message || 'Something went wrong with your request!');
      }
    } catch (error: any) {
      dispatch({
        type: T.SIGNINFAILURE,
        payload: error?.message,
      });
      cb(error);
    }
  };

export const GetReports =
  (type: string) =>
  async (dispatch: IFunction): Promise<any> => {
    if (!type) throwError('Specify the type of request you want');
    dispatch({
      type: T.GETAPPREPORTSREQUEST,
      target: type,
    });
    const res = await api.getReports(type);
    try {
      if (res.status === 200 || res.status === 201 || res.status === 204) {
        dispatch({
          type: T.GETAPPREPORTSSUCCESS,
          payload: res.data,
          target: type,
        });
      } else {
        const error: any = res?.data;
        throwError(error?.message || 'Something went wrong with your request!');
      }
    } catch (error: any) {
      dispatch({
        type: T.GETAPPREPORTSFAILURE,
        payload: error?.message,
        target: type,
      });
    }
  };

export const InitiateWaitlistSignupAction =
  (payload: any) =>
  async (dispatch: IFunction): Promise<any> => {
    dispatch({
      type: T.OPENMODAL,
      payload,
      component: WAITLISTFORM,
    });
    return { status: 'successful' };
  };

export const FinishWaitlistSignupAction =
  (type: string) =>
  async (dispatch: IFunction): Promise<any> => {
    if (!type) throwError('Specify the type of request you want');
    dispatch({
      type: T.CLOSEMODAL,
      target: type,
      component: null,
    });
    return { status: 'successful' };
  };
