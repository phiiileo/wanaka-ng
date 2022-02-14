import { IAction, IAppSetting, ICustomData } from '../../interfaces';
import * as T from '../types';

const rawData: any = localStorage;
let user = {};
if (!rawData) {
  user = JSON.parse(rawData);
}
console.log(user);

const defaultState: IAppSetting = {
  waitlist: { request: null, response: null },
  isSidebarOpened: false,
  showOnlyMenuIcons: false,
  profileSideBarOpened: false,
  sideBarSettings: {
    contentTarget: null,
    showSideBar: false,
    sideBarPosition: 100,
    data: {},
  },
  sideBarTracker: [],
  sideBarLastAction: 'open',
  modalState: {
    isOpened: false,
    data: null,
    component: null,
  },
  reports: {
    [T.USERROLES]: [],
    [T.PACKAGETYPES]: [],
    [T.REQUESTTYPES]: [],
    [T.REQUESTSTATUSES]: [],
    [T.PACKAGESTATUSES]: [],
    [T.USERSTATUSES]: [],
  },
  currency: '₦',
  investmentPackagePage: {
    activeTab: 'active',
  },
};
export default (state = defaultState, action: IAction): ICustomData => {
  const { type, payload, component, target } = action;
  switch (type) {
    case T.OPENMODAL:
      return {
        ...state,
        modalState: {
          isOpened: true,
          data: payload,
          component: component,
        },
      };
    case T.CLOSEMODAL:
      return {
        ...state,
        modalState: {
          isOpened: false,
          data: null,
          component: null,
        },
      };
    case T.TOGGLESIDEBAR:
      return {
        ...state,
        isSidebarOpened: !state.isSidebarOpened,
      };
    case T.TOGGLEPROFILESETTINGSSIDEBAR:
      return {
        ...state,
        profileSideBarOpened: !state.profileSideBarOpened,
      };
    case T.LOGOUTREQUEST:
      return defaultState;
    case T.SHOWONLYMENUICONS:
      return {
        ...state,
        showOnlyMenuIcons: !state.showOnlyMenuIcons,
        sideBarSettings: {
          ...state.sideBarSettings,
          sideBarPosition: !state.showOnlyMenuIcons ? 100 : 260,
        },
      };
    case T.OPENSIDEMENU:
      if (state.sideBarSettings.contentTarget === action.target) return state;
      const newState: any = {
        ...state,
        sideBarSettings: {
          ...state.sideBarSettings,
          contentTarget: action.target,
          showSideBar: true,
          data: payload,
        },
        sideBarLastAction: 'open',
      };
      newState?.sideBarTracker?.push(newState.sideBarSettings);
      return newState;
    case T.ADJUSTSIDEMENUPOSITION:
      return {
        ...state,
        sideBarSettings: {
          ...state.sideBarSettings,
          sideBarPosition: payload,
        },
      };
    case T.CLOSESIDEMENU:
      return {
        ...state,
        sideBarSettings: {
          ...state.sideBarSettings,
          contentTarget: null,
          showSideBar: false,
        },
        sideBarTracker: [],
      };
    case T.GOTOPREVIOUSSIDEMENU:
      if (state.sideBarLastAction == 'open') state.sideBarTracker?.pop();
      const prevnewState = state.sideBarTracker?.pop();
      if (state.sideBarTracker?.length == 0) state.sideBarTracker?.push(prevnewState);
      if (!prevnewState) return state;
      return {
        ...state,
        sideBarSettings: {
          ...state.sideBarSettings,
          ...prevnewState,
        },
        sideBarLastAction: 'closed',
      };
    case T.GETAPPREPORTSREQUEST:
      return {
        ...state,
        reports: {
          ...state.reports,
          [target]: payload,
        },
      };
    case T.GETAPPREPORTSSUCCESS:
      return {
        ...state,
        reports: {
          ...state.reports,
          [target]: payload,
        },
      };
    case T.GETAPPREPORTSFAILURE:
      return {
        reports: {
          ...state.reports,
          [target]: payload,
        },
      };
    case T.SETACTIVEPACKAGETAB:
      return {
        ...state,
        investmentPackagePage: {
          activeTab: payload,
        },
      };
    case T.WAITLISTFORMSUCCESSFUL:
      localStorage.setItem('wanaka-waitlist', JSON.stringify(payload));
      return {
        ...state,
        waitlist: payload,
      };

    default:
      return state;
  }
};
