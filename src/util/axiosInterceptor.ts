import Api from '@util/axiosConfig';
import dayjs from 'dayjs';
import axios from 'axios';
import { deleteCookie, getCookie } from '@util/utils';

const AxiosInterceptor = (navigate: any) => {
  Api.interceptors.request.use(
    async (config) => {
      const id = localStorage.getItem('id');
      const expire = localStorage.getItem('expire');

      if (dayjs(expire).isBefore(dayjs())) {
        console.log('token refresh request');
        await axios.get(`/api/users/${id}/refresh`);
        await tokenProcess('default');
      }

      return config;
    },
    (error) => {
      console.log('refresh error' + error);
    },
  );

  Api.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 403) {
          console.log('token refresh response error');
          await tokenProcess('logout');
          navigate('/sign-in');
          return false;
        }
      }
      return Promise.reject(error);
    },
  );
};

export default AxiosInterceptor;

type TokenProcessType = 'default' | 'logout';

export const tokenProcess = async (type: TokenProcessType) => {
  if (type === 'default') {
    Api.defaults.headers.common['Authorization'] = `Bearer ${getCookie(
      'access_token',
    )}`;
    deleteCookie('access_token');
    localStorage.setItem(
      'expire',
      // dayjs().add(1, 'minute').format('YYYY-MM-DD HH:mm:ss'),
      dayjs().add(1, 'second').format('YYYY-MM-DD HH:mm:ss'),
    );
  } else if (type === 'logout') {
    console.log('[EVENT] ==> logout');
    await axios.get(`/api/users/${localStorage.getItem('id')}/logout`);
    localStorage.removeItem('id');
    localStorage.removeItem('expire');
  }
};
