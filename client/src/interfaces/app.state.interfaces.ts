export interface IState {
  [key: string]: any;
  appSettings: IAppSetting;
  authentication: IAuthentication;
  package: Package;
  payment: Payment;
  request: Request;
  user: User;
}

export interface IDefaultData {
  [key: string]: any;
  loading: boolean;
  done: boolean;
  data: any;
  error: any;
}
export interface IAuthentication {
  [key: string]: any;
}

export interface IAppSetting {
  [key: string]: any;
  investmentPackagePage?: IInvestmentPackagePage;
}
export interface IInvestmentPackagePage {
  activeTab: string;
}

export interface Package {
  [key: string]: IDefaultData;
  active: IDefaultData;
  disabled: IDefaultData;
  deleted: IDefaultData;
  current: IDefaultData;
}
export interface Payment {
  [key: string]: any;
}

export interface Request {
  [key: string]: any;
}

export interface User {
  [key: string]: any;
}
