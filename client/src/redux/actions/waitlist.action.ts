import { IFunction } from '../../interfaces';
import api from '../../services/api';
import { throwError } from '../../utils';
import * as T from './../types';
import { WAITLISTFORM } from './../types';

export const AddToWaitlistAction =
  (payload: any, cb: any) =>
  async (dispatch: IFunction): Promise<any> => {
    if (!payload) throwError('Specify the type of request you want');
    // dispatch({
    //   type: T.GETAPPREPORTSREQUEST,
    // });
    console.log(payload);
    const res = await api.PostRequest('waitlist/add', payload);
    try {
      if (res.status === 200 || res.status === 201 || res.status === 204) {
        dispatch({
          type: T.WAITLISTFORMSUCCESSFUL,
          payload: { response: res.data, request: payload },
        });
        cb(null, res.data);
      } else {
        const error: any = res?.data;
        throwError(error?.message || 'Something went wrong with your request!');
      }
    } catch (error: any) {
      console.error(error);
      // dispatch({
      //   type: T.GETAPPREPORTSFAILURE,
      //   payload: error?.message,
      //   target: type,
      // });
      cb(error);
    }
  };

export const GetLeaderBoard =
  (cb: any) =>
  async (dispatch: IFunction): Promise<any> => {
    // dispatch({
    //   type: T.GETAPPREPORTSREQUEST,
    // });
    console.log('getting leader board');
    const res = await api.GetRequest('leaderboard/details');
    try {
      if (res.status === 200 || res.status === 201 || res.status === 204) {
        dispatch({
          type: T.LEADERBOARDDATASUCCESSFUL,
          payload: res.data,
        });
        cb(null, res.data);
      } else {
        const error: any = res?.data;
        throwError(error?.message || 'Something went wrong with your request!');
      }
    } catch (error: any) {
      console.error(error);
      // dispatch({
      //   type: T.GETAPPREPORTSFAILURE,
      //   payload: error?.message,
      //   target: type,
      // });
      cb(error);
    }
  };
