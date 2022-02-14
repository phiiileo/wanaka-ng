import { useContext } from 'react';
import { AlertContext } from '../contexts';
import { IAlert } from '../interfaces';

export const useAlert = (): IAlert => {
  const notification = useContext(AlertContext);
  return {
    success: notification.SuccessNotification,
    error: notification.ErrorNotification,
    warning: notification.WarningNotification,
  };
};

export default useAlert;
