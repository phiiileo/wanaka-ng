import apisauce from 'apisauce';
import axios, { AxiosInstance } from 'axios';
import appConfig from '../config/app.config';
// import axiosRetry from 'axios-retry';
import AppConfig from '../config/app.config';
import { ISearchData } from '../interfaces';

const create = () => {
  const axiosInstance: any = axios.create({
    baseURL: AppConfig.baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      _auth: 'wanakalivenow',
    },
    withCredentials: false,
  });
  const api = apisauce.create({ axiosInstance: axiosInstance, baseURL: AppConfig.baseURL });

  api.addAsyncRequestTransform((request) => async () => {
    const token = getAuthToken();
    request.headers['Authorization'] = 'Bearer ' + token;
  });
  api.addAsyncResponseTransform((response) => async () => {
    if (response.config?.url === `accounts/login` && response.status === 200) {
      const token = response.data.data.token;
      setAuthToken(token);
    }
    if (response.status === 401) {
      window.location.replace(`/sign-in`);
    }
  });

  const getAuthToken = () => {
    return localStorage.gasify_token;
  };
  const deleteAuthToken = () => {
    delete localStorage.gasify_token;
  };
  const setAuthToken = (token: string) => {
    return localStorage.setItem('gasify_token', token);
  };
  // Authentication endpoints
  const createUser = (payload: any) => api.post(`accounts/create`, payload);
  const confirmEmail = (accesskey: string) =>
    api.post(
      `accounts/confirmemail`,
      {},
      {
        headers: {
          _authkey: accesskey,
        },
      },
    );

  // Requests endpoints
  // Search endpoint
  const SearchData = (payload: ISearchData) => api.get(`search/${payload.type}?text=${payload.searchText}`);

  //Post Requests
  const PostRequest = (path: string, payload: any) => api.post(path, payload);
  const GetRequest = (path: string) => api.get(path);

  // App Settings

  const getReports = (type: string) => api.get(`reports/${type}`);
  return {
    api,
    getAuthToken,
    setAuthToken,
    deleteAuthToken,
    SearchData,
    PostRequest,
    GetRequest,
    getReports,
    createUser,
  };
};

const api = create();
export default api;
