import { ICustomData, IDatePart, IDayMonth, IFunction, IMonthYear } from '../interfaces';

export const GenerateReference = (): string => {
  const ref = 'GASIFY' + new Date().getMilliseconds().toString();
  return ref;
};

export const getComputedThemeColor = (variant: string | undefined, theme: ICustomData): string => {
  const color =
    variant === 'dark' && theme.type === 'light'
      ? theme.colors.dark
      : variant === 'brand'
      ? theme.colors.primary
      : variant === 'secondary'
      ? theme.colors.secondary
      : variant === 'plain'
      ? theme.colors.white
      : variant
      ? theme.colors[variant]
      : theme.colors.white;
  return color;
};

export const getTimeDifference = (rawDate: string): string => {
  const currentDate = new Date();
  const date = new Date(rawDate);
  const diff = currentDate.valueOf() - date.valueOf();
  const seconds = Math.ceil(diff / 1000);
  const minutes = Math.ceil(seconds / 60);
  const hours = Math.ceil(minutes / 60);
  const days = Math.ceil(hours / 24);
  let timeinstring = '';
  if (seconds < 60) {
    timeinstring = seconds + ` ${seconds === 1 ? `sec` : `secs`}`;
  } else if (minutes < 60) {
    timeinstring = minutes + ` ${minutes === 1 ? `min` : `mins`}`;
  } else if (hours < 24) {
    timeinstring = hours + ` ${hours === 1 ? `h` : `hs`}`;
  } else {
    timeinstring = days + ` ${days === 1 ? `d` : `ds`}`;
  }
  return timeinstring + ' ago';
};

export const getDateParts = (from: string, to: string): IDatePart => {
  const currentDate = new Date(from);
  const date = new Date(to);
  let diff = currentDate.valueOf() - date.valueOf();
  if (diff < -1) diff = 0;
  const seconds = Math.ceil(diff / 1000);
  const minutes = Math.ceil(seconds / 60);
  const hours = Math.ceil(minutes / 60);
  const days = Math.ceil(hours / 24);
  return {
    milliseconds: diff,
    seconds,
    minutes,
    hours,
    days,
  };
};

export const addEventListenerToDoc = (wrapperId: string, cb: IFunction): void => {
  window.addEventListener(
    'click',
    (e: any) => {
      const target: HTMLElement | null = document.querySelector(`#${wrapperId}`);
      if (target?.contains(e.target)) {
        cb(true);
      } else {
        cb(false);
      }
    },
    false,
  );
};

export const getSize = (size = 'xs'): string => {
  let _size;
  switch (size) {
    case 'xxs':
      _size = '15px';
      break;
    case 'xs':
      _size = '30px';
      break;
    case 'sm':
      _size = '50px';
      break;
    case 'sm2':
      _size = '65px';
      break;
    case 'md':
      _size = '100px';
      break;
    case 'lg':
      _size = '200px';
      break;
    case 'xl':
      _size = '300px';
      break;
    case 'xxl':
      _size = '500px';
      break;
    default:
      _size = '50px';
  }
  return _size;
};

export const openPage = (path: string, push: IFunction): void => {
  push && push(path);
};

export const getDayGreetings = (): string => {
  const date = new Date();
  const hour = date.getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
};

export const throwError = (message: string): void => {
  throw new Error(message ?? 'Something went wrong, please try again');
};

export const getMaximumValue = (source: any[]): number => {
  const value = source.reduce(function (a: any, b: any) {
    return Math.max(a, b);
  }, 0);
  return value;
};

export const getStringTime = (rawTime: string | undefined, type?: string): string | undefined => {
  if (!rawTime) return undefined;
  const date = new Date(rawTime);
  if (type === 'short') {
    const month = Number(date.getMonth() + 1);
    const dayDate = Number(date.getDate());
    const short = `${date.getFullYear()}-${month < 10 ? `0${month}` : month}-${dayDate < 10 ? `0${dayDate}` : dayDate}`;
    return short;
  }
  return date.toDateString();
};

export const validateObjectData = (oobject: ICustomData): string => {
  for (const key in oobject) {
    const object: any = oobject;
    const value: string = object[key];
    if (typeof object[key] === 'boolean') continue;
    if (!value && key != 'password') throwError('All fields must be filled');
    return '';
  }
  return '';
};

export const orderArrayByKey = (rawData: any[], key: string, order: string): any[] => {
  const data = rawData.sort((a: any, b: any) => (a[key] > b[key] ? (order === 'asc' ? 1 : -1) : -1));
  return data;
};

export const filterArrayByKey = (rawData: any[], key: string, filter: string | number): any[] => {
  const data = rawData.filter((data: any) => {
    //console.log(data[key], Number(filter));
    if (typeof filter === 'string') return data[key] !== filter || data[key] !== filter;
    return data[key] !== filter || data[key] !== Number(filter);
  });
  return data;
};

export const findInArrayByKey = (rawData: any[], key: string, filter: string | number): any[] => {
  const data = rawData.filter((data: any) => {
    // console.log(data[key], Number(filter));
    if (key === 'roles') return data[key].indexOf(filter) > -1 || data[key].indexOf(Number(filter)) > -1;
    return data[key] == filter || data[key] == Number(filter);
  });
  return data;
};
export const calculateReturn = (principal: number, rate: number): number => {
  const total = Number(principal) + Number(principal) * (Number(rate) / 100);
  return total;
};
export const getNumberOfDaysInAMonth = (year: number, month: number): number => {
  return new Date(year, month, 0).getDate();
};

export const getEmptyArrays = (length: number): any[] => {
  const list: any[] = [];
  for (let index = 0; index < length; index++) {
    list.push({
      key: index + 1,
    });
  }
  return list;
};

export const getDayDetailsInArrays = (length: number, year: number, month: number): any[] => {
  const list: any[] = [];
  const days = getDaysInArray();
  for (let index = 0; index < length; index++) {
    const date = new Date(year, month, index + 1);
    const dayName = date.toDateString().split(' ')[0];
    const dayData = days.filter((x) => x.shortName === dayName)[0];
    list.push({
      id: index + 1,
      ...dayData,
    });
  }
  return list;
};
export const getRandomNumber = (min: number, max: number): number => {
  if (max < min) max = min;
  const number = () => Math.floor(Math.random() * max);
  let _number = number();
  if (_number < min) {
    _number += min;
    if (_number > max) _number = getRandomNumber(min, max);
  }
  return _number;
};

export const getDaysInArray = (): IDayMonth[] => {
  return [
    { fullName: 'Monday', shortName: 'Mon', key: 0 },
    { fullName: 'Tuesday', shortName: 'Tue', key: 1 },
    { fullName: 'Wednesday', shortName: 'Wed', key: 2 },
    { fullName: 'Thursday', shortName: 'Thu', key: 3 },
    { fullName: 'Friday', shortName: 'Fri', key: 4 },
    { fullName: 'Saturday', shortName: 'Sat', key: 5 },
    { fullName: 'Sunday', shortName: 'Sun', key: 6 },
  ];
};

export const getMonthsInArray = (): IDayMonth[] => {
  return [
    { fullName: 'January', shortName: 'Jan', key: 0 },
    { fullName: 'February', shortName: 'Feb', key: 1 },
    { fullName: 'March', shortName: 'March', key: 2 },
    { fullName: 'April', shortName: 'April', key: 3 },
    { fullName: 'May', shortName: 'May', key: 4 },
    { fullName: 'June', shortName: 'June', key: 5 },
    { fullName: 'July', shortName: 'July', key: 6 },
    { fullName: 'August', shortName: 'Aug', key: 7 },
    { fullName: 'September', shortName: 'Sept', key: 8 },
    { fullName: 'October', shortName: 'Oct', key: 9 },
    { fullName: 'November', shortName: 'Nov', key: 10 },
    { fullName: 'December', shortName: 'Dec', key: 11 },
  ];
};

export const getDaysInAMonth = (year: number, month: number): IDayMonth[] => {
  if (year < month) throwError('Year cannot be less than month');
  const days: any[] = [];
  const date = new Date(year, month, 1);
  const dayName = date.toDateString().split(' ')[0];
  const dayPosition = getDaysInArray().filter((x) => x.shortName === dayName)[0]?.key;
  const prevMonthDays = getEmptyArrays(dayPosition);
  const numberOfDays = getNumberOfDaysInAMonth(year, month + 1);
  const daysLeft = 35 - numberOfDays - dayPosition;
  const currentMonthDays = getDayDetailsInArrays(numberOfDays, year, month);
  const nextMonthDays = getEmptyArrays(daysLeft);
  days.push(...[...prevMonthDays, ...currentMonthDays, ...nextMonthDays]);
  return days;
};

export const getMonthAndYears = (range: number): IMonthYear[] => {
  const todayDate = new Date();
  const currentYear = todayDate.getFullYear();
  const currentMonth = todayDate.getMonth();
  const yearsBefore: IMonthYear[] = [];
  const yearsAfter: IMonthYear[] = [];
  const months = getMonthsInArray();
  for (let index = 0; index <= range; index++) {
    months.map((month) => {
      const year = currentYear + index;
      yearsAfter.push({
        value: month.shortName.toLocaleLowerCase() + year,
        year: year,
        text: month.shortName + ' ' + year,
        month: month.key,
        monthName: month.shortName,
        active: currentYear === year && month.key === currentMonth,
      });
      const prevYear = currentYear - index - 1;
      // yearsBefore.unshift({
      //   value: month.shortName.toLocaleLowerCase() + prevYear,
      //   year: prevYear,
      //   text: month.shortName + '  ' + prevYear,
      //   month: month.key,
      //   monthName: month.shortName,
      // });
    });
  }
  const final = [...yearsBefore, ...yearsAfter];
  return final;
};

export const formatNumber = (x: number) => {
  if (isNaN(x)) return x;
  if (x < 1000) return x;
  if (x < 10000) return `${(x / 1000).toFixed(2)}K`;
  if (x < 100000) return `${(x / 1000).toFixed(1)}K`;
  if (x < 1000000) return `${Math.round(x / 1000)}K`;
  if (x < 10000000) return `${(x / 1000000).toFixed(2)}M`;
  if (x < 100000000) return `${(x / 1000000).toFixed(1)}M`;
  if (x < 1000000000) return `${Math.round(x / 1000000)}M`;
  if (x < 1000000000000) return `${Math.round(x / 1000000000)}B`;
  return '1T+';
};

export const commarize = ($number: number) => {
  if (!$number) return 0;
  const number = $number?.toString().split('.');
  const mainpart = number[0];
  const minipart = (number.length > 1 ? number[1].toString() : '00').substr(0, 2);
  const numberstring = mainpart?.toString()?.split('')?.reverse() || [];
  let formatedstring = '';
  numberstring.forEach((x: string, i: number) => {
    if (i % 3 === 0 && i !== 0) formatedstring += ',';
    formatedstring += x;
  });
  formatedstring = formatedstring.split('').reverse().join('');
  return formatedstring + `.${minipart}`;
};

export const getRequestStatus = (status: number): string => {
  return status == 0
    ? 'Unknown'
    : status == 1
    ? 'Processing'
    : status == 2
    ? 'Initiated'
    : status == 3
    ? 'Approved'
    : 'Rejected';
};
export const getRequestType = (status: number): string => {
  return status == 1 ? 'Loans' : status == 2 ? 'Gas Supply' : 'Logistics';
};
