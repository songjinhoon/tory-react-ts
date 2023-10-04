import Api from '@util/axiosConfig';

const fetcher = (url: string) =>
  Api.get(url, {
    withCredentials: true,
  }).then((response) => response.data);

export default fetcher;
