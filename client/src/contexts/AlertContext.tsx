import { useTheme } from '@emotion/react';
import React, { useRef } from 'react';
import NotificationSystem from 'react-notification-system';

const defaultContextData: any = {
  dark: false,
};

export const AlertContext = React.createContext(defaultContextData);

export const AlertProvider = (props: any) => {
  const notificationSystem = useRef();
  const theme: any = useTheme();
  const addNotification = ({ title = '', message = '', level = 'warning' }: any) => {
    const notification: any = notificationSystem.current;
    notification.addNotification({
      message: message,
      level: level,
    });
  };

  const SuccessNotification = (message: any) => {
    addNotification({
      message: message || 'Your request was processed successfully',
      level: 'success',
    });
  };

  const style = {
    NotificationItem: {
      // Override the notification item
      DefaultStyle: {
        // Applied to every notification, regardless of the notification level
        margin: '10px 5px 2px 1px',
        fontSize: '20px',
        fontWeight: 'bold',
        // wordBreak: 'break-all',
      },
    },
  };
  const ErrorNotification = (message: any) => {
    addNotification({
      message: message || 'Something went wrong while trying to process your request!',
      level: 'error',
    });
  };
  const WarningNotification = (message: any) => {
    addNotification({
      message,
      level: 'warning',
    });
  };
  return (
    <AlertContext.Provider
      value={{
        SuccessNotification,
        ErrorNotification,
        WarningNotification,
      }}
    >
      <NotificationSystem {...props} ref={notificationSystem} style={style} />
      {props.children}
    </AlertContext.Provider>
  );
};
