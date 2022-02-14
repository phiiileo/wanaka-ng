import { useSelector } from 'react-redux';
// import { IUser } from '../interfaces/user.interfaces';

export const AuthUser = (): any => {
  const user = useSelector((state: any) => state.user.authUser.data);
  return user;
};

export const useBalance = () => {
  const user = useSelector((state: any) => state.user.userWallet || {});
  return user;
};
