export interface AppRoute {
  name: string;
  path: string;
  component: any;
}

export interface ICustomData {
  [key: string]: any;
}
export interface IFunction {
  (err?: any, res?: any): void;
}

export interface IAction {
  [key: string]: any;
  error?: string;
  payload?: any;
  target?: any;
  type: string | number;
}

export interface IComponent {
  [key: string]: any;
  component?: any;
  key?: number;
  id?: number;
  ref?: any;
}

export interface IAlert {
  success: any;
  warning: any;
  error: any;
}
export interface Theme {
  colors: any;
  breakpoints: any;
  buttons: any;
  font: any;
  mq: any;
  heading: any;
  type: string;
}

export interface ButtonProps {
  type?: any;
  variant?: string;
  color?: string;
  children?: any;
  onClick?: any;
  rounded?: boolean;
  size?: string;
  action?: string;
  disabled?: boolean;
  loading?: boolean;
  fullwidth?: boolean;
}

export interface SpinnerProps {
  type?: string;
  size?: string;
  variant?: string;
}

export interface AvatarProps {
  src?: string | any;
  size?: string;
  editable?: boolean;
  rounded?: boolean;
  tag?: string;
  path?: any;
  children?: any;
}
export interface IconProps {
  variant?: string;
  onClick?: any;
  size?: string;
  color?: string;
  children?: any;
  scale?: string;
}

export interface AuthWrapperProps {
  buttontext?: string;
  buttonaction?: string;
  motto?: string;
  greeting?: string;
  position?: string;
  children?: any;
}

export interface Pagination {
  pagesize?: number;
  pagenumber?: number;
}

export interface BrandLogoInterface {
  notfix?: boolean;
  color?: string;
  position?: string;
}

export interface ISearchData {
  searchText?: string;
  status?: number;
  role?: number;
  pageSize: number;
  pageNumber: number;
  type?: number;
}

export interface IRoles {
  name: string;
  value: number;
}

export interface IUserStatus {
  name: string;
  value: number;
}

export interface IData {
  [key: string]: any;
  loading: boolean;
  done: boolean;
  data: any;
  dataCount?: number;
  err: string | undefined;
}

export interface IDayMonth {
  fullName: string;
  shortName: string;
  key: number;
  id?: number;
}
export interface IMonthYear {
  id?: number;
  value: string;
  text: string;
  year: number;
  month: number;
  active?: boolean;
  monthName?: string;
}

export interface IDatePart {
  milliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  year: number;
  month: string;
  day: string;
}
export interface UploadImageProps {
  src?: string | any;
  size?: string;
  editable?: boolean;
  rounded?: boolean;
  tag?: string;
  path?: any;
  children?: any;
  selectimagecb?: any;
  disable?: boolean;
}
