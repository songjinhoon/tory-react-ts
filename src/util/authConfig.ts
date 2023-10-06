import Api from '@util/axiosConfig';
import { deleteCookie, getCookie } from '@util/utils';
import dayjs from 'dayjs';

// 인증 등록
export const createAuth = () => {
  Api.defaults.headers.common['Authorization'] = `Bearer ${getCookie(
    'access_token',
  )}`;
  deleteCookie('access_token');
  localStorage.setItem(
    'expire',
    // dayjs().add(1, 'minute').format('YYYY-MM-DD HH:mm:ss'),
    dayjs().add(10, 'second').format('YYYY-MM-DD HH:mm:ss'),
  );
};

// 인증 해제
export const deleteAuth = () => {
  localStorage.removeItem('id');
  localStorage.removeItem('expire');
};

// 토큰 유효기간 체크
export const isInValidToken = () =>
  dayjs(localStorage.getItem('expire')).isBefore(dayjs());
