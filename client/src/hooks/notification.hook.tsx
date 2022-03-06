import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector((state: any) => state.user.notification);
  return notification;
};

export default Notification;
