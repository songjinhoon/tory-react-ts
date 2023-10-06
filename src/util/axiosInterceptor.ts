import Api from '@util/axiosConfig';
import axios from 'axios';
import {
  deleteAuth,
  getId,
  isInValidToken,
  updateAuth,
} from '@util/authConfig';

const AxiosInterceptor = (navigate: any) => {
  Api.interceptors.request.use(
    async (config) => {
      console.log('request interceptor');

      if (isInValidToken()) {
        console.log('token refresh request');

        await axios.get(`/api/users/${getId()}/refresh`);

        updateAuth();
      }

      return config;
    },
    (error) => {
      console.log('refresh error' + error);
    },
  );

  Api.interceptors.response.use(
    function (response) {
      console.log('response interceptor');
      return response;
    },
    async function (error) {
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 403) {
          console.log('token refresh response error');

          await axios.get(`/api/users/${getId()}/logout`);

          deleteAuth();

          navigate('/sign-in');

          return false;
        }
      }
      return Promise.reject(error);
    },
  );
};

export default AxiosInterceptor;
