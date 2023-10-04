const CustomApi = () => {};

export default CustomApi;

/*const Api = axios.create({
  timeout: 10000,
  params: {},
});

Api.defaults.withCredentials = true;*/

/*const Refresh = async (config: any) => {
  const id = localStorage.getItem('id');
  const expire = localStorage.getItem('expire');
  if (dayjs(expire).isBefore(dayjs())) {
    console.log('token refresh request');
    axios
      .get(`/api/users/${id}/refresh`)
      .then(async () => {
        await tokenProcess('default');
      })
      .catch(async () => {
        await tokenProcess('logout');
      });
  }
  return config;
};
const refreshErrorHandle = (error: any) => {
  console.log('refresh error' + error);
};

Api.interceptors.request.use(Refresh, refreshErrorHandle);

export default Api;

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
    console.log('[EVENT] ::: logout');
    await axios.get(`/api/users/${localStorage.getItem('id')}/logout`);
    localStorage.removeItem('id');
    localStorage.removeItem('expire');
  }
};*/
