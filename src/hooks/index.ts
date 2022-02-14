import { useSelector } from 'react-redux';
import { IRoles } from '../interfaces';
import { USERROLES } from '../redux/types';

export { default as useAlert } from './alert.hook';
export * from './user.hooks';

export const useCurrency = (): string => {
  return useSelector((state: any) => state.appSettings.currency);
};
export const useRoles = (): IRoles[] => {
  return useSelector((state: any) => state.appSettings.reports[USERROLES]?.data || []);
};

export const useReport = (type: string): any[] => {
  return useSelector((state: any) => state.appSettings.reports[type]?.data || []);
};
