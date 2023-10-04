import axios from 'axios';

const Api = axios.create({
  timeout: 10000,
  params: {},
});

Api.defaults.withCredentials = true;

export default Api;
