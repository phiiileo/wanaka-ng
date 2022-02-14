import { IAction, ICustomData } from '../../interfaces';
import * as T from './../types';
const defaultData: any = {
  fetching: false,
  data: {},
  error: '',
  done: false,
};
const defaultState: any = {
  authUser: {
    ...defaultData,
  },
  userWallet: { ...defaultData },
  all: {
    ...defaultData,
    data: [],
  },
  notification: { ...defaultData, data: [] },
};
export default (state = defaultState, action: IAction): ICustomData => {
  const { type, payload } = action;
  switch (type) {
    case T.SETUSERROLE:
      const authUser = state.authUser;
      authUser.data.role = payload;
      return {
        ...state,
        authUser,
      };
    case T.UPDATEPROFILEINPUTFIELDS:
      const updatedFiled = payload.field;
      const newValue = payload.value;
      state.authUser.data = {
        ...state.authUser.data,
        [updatedFiled]: newValue,
      };
      state.authUser.formData = {
        ...state.authUser.formData,
        [updatedFiled]: newValue,
      };
      return { ...state };
    case T.GETAUTHUSERDATAREQUEST:
      return {
        ...state,
        authUser: { ...state.authUser, fetching: true, error: null, done: false },
      };
    case T.GETAUTHUSERDATASUCCESS:
      return {
        ...state,
        authUser: { fetching: false, error: null, done: true, data: payload.data },
      };
    case T.GETAUTHUSERDATAFAILURE:
      return {
        ...state,
        authUser: { fetching: false, error: action.error, done: true },
      };
    case T.GETALLUSERSREQUEST:
      return {
        ...state,
        all: { ...state.all, fetching: true, error: null, done: false },
      };
    case T.GETALLUSERSSUCCESS:
      return {
        ...state,
        all: { ...state.all, fetching: false, error: null, done: true, data: payload?.data },
      };
    case T.CREATEUSERSUCCESS:
      const allusers: any[] = state.all.data || [];
      allusers.push(payload.data);
      return {
        ...state,
        all: { ...state.all, fetching: false, error: null, done: true, data: allusers },
      };
    case T.GETALLUSERSFAILURE:
      return {
        ...state,
        all: { ...state.all, fetching: false, error: payload, done: true },
      };
    case T.UPDATEUSERPROFILEDETAILSREQUEST:
      return {
        ...state,
        updatingProfile: { ...state.updatingProfile, fetching: true, error: null, done: false },
      };
    case T.UPDATEUSERPROFILEDETAILSSUCCESS:
      return {
        ...state,
        updatingProfile: { ...state.updatingProfile, fetching: false, error: null, done: true },
      };
    case T.UPDATEUSERPROFILEDETAILSFAILURE:
      return {
        ...state,
        updatingProfile: { ...state.updatingProfile, fetching: false, error: action.error, done: true },
      };

    case T.GETNOTIFICATIONREQUEST:
      return {
        ...state,
        notification: { ...state.notification, fetching: true, error: null, done: false },
      };
    case T.GETNOTIFICATIONSUCCESS:
      const notifyData = {
        all: payload.data,
        total: payload?.data?.length > 9 ? '9+' : payload?.data?.length,
        read: 0,
        unread: 0,
      };
      return {
        ...state,
        notification: { ...state.notification, fetching: false, error: null, done: true, data: notifyData },
      };
    case T.GETNOTIFICATIONFAILURE:
      return {
        ...state,
        notification: { ...state.notification, fetching: false, error: payload, done: true },
      };
    case T.MARKALLNOTIFICATIONASREADREQUEST:
      return {
        ...state,
      };
    case T.MARKALLNOTIFICATIONASREADSUCCESS:
      const mark = {
        total: 0,
        unread: 0,
      };
      return {
        ...state,
        notification: {
          ...state.notification,
          fetching: false,
          error: null,
          done: true,
          data: {
            ...state.notification.data,
            ...mark,
          },
        },
      };
    case T.MARKALLNOTIFICATIONASREADFAILURE:
      return {
        ...state,
        notification: { ...state.notification, fetching: false, error: payload, done: true },
      };
    case T.LOGOUTREQUEST:
      window.location.replace('/sign-in');
      return {
        ...state,
        authUser: defaultState.authUser,
      };
    case T.GETUSERWALLETREQUEST:
      return {
        ...state,
        userWallet: { ...state.userWallet, fetching: true, error: null, done: false },
      };
    case T.GETUSERWALLETSUCCESS:
      return {
        ...state,
        userWallet: { ...state.userWallet, fetching: false, error: null, done: true, data: payload.data },
      };
    case T.GETUSERWALLETFAILURE:
      return {
        ...state,
        userWallet: { ...state.userWallet, fetching: false, error: payload, done: true },
      };
    case T.GETUSERBYUSERNAMEREQUEST:
      return {
        ...state,
      };
    case T.GETUSERBYUSERNAMESUCCESS:
      console.log(payload.data);
      return {
        ...state,
        externalUser: payload.data,
        authUser: { fetching: false, error: null, done: true, data: payload.data },
      };
    case T.GETUSERBYUSERNAMEFAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
