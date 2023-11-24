import Api from './axiosConfig';
import { deleteCookie, getCookie } from './utils';
import dayjs from 'dayjs';

/*
 * 내부 정책에 맞게 인증 체계를 구현한다.
 * 예) cookie, localStorage, store 등등
 * 해당 프로젝트에서는 localStorage 활용
 * */
// 인증 등록
export const createAuth = (id: string) => {
  localStorage.setItem('id', id);
  localStorage.setItem('accessToken', getCookie('access_token'));

  Api.defaults.headers.common['Authorization'] = `Bearer ${getCookie(
    'access_token',
  )}`;
  deleteCookie('access_token');

  localStorage.setItem(
    'expire',
    dayjs().add(10, 'second').format('YYYY-MM-DD HH:mm:ss'),
  );
};

export const updateAuth = () => {
  localStorage.setItem('accessToken', getCookie('access_token'));

  Api.defaults.headers.common['Authorization'] = `Bearer ${getCookie(
    'access_token',
  )}`;
  deleteCookie('access_token');

  localStorage.setItem(
    'expire',
    dayjs().add(10, 'second').format('YYYY-MM-DD HH:mm:ss'),
  );
};

// 인증 해제
export const deleteAuth = () => {
  localStorage.removeItem('id');
  localStorage.removeItem('expire');
  localStorage.removeItem('accessToken');
};

// 토큰 유효기간 체크
export const isInValidToken = () =>
  dayjs(localStorage.getItem('expire')).isBefore(dayjs());

export const getId = () => localStorage.getItem('id');

export const refreshCheck = () => {
  if (
    localStorage.getItem('id') &&
    localStorage.getItem('expire') &&
    localStorage.getItem('accessToken')
  ) {
    Api.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('accessToken')}`;
    deleteCookie('access_token');
  }
};
