import Api from '@util/axiosConfig';
import { deleteCookie, getCookie } from '@util/utils';
import dayjs from 'dayjs';
import mainStore from '@util/store';

/*
 * 내부 정책에 맞게 인증 체계를 구현한다.
 * 예) cookie, localStorage, store 등등
 * */
// 인증 등록
export const createAuth = (id: string) => {
  mainStore.setItem('id', id);
  Api.defaults.headers.common['Authorization'] = `Bearer ${getCookie(
    'access_token',
  )}`;
  deleteCookie('access_token');
  mainStore.setItem(
    'expire',
    dayjs().add(10, 'second').format('YYYY-MM-DD HH:mm:ss'),
  );
};

export const updateAuth = () => {
  Api.defaults.headers.common['Authorization'] = `Bearer ${getCookie(
    'access_token',
  )}`;
  deleteCookie('access_token');
  mainStore.setItem(
    'expire',
    dayjs().add(10, 'second').format('YYYY-MM-DD HH:mm:ss'),
  );
};

// 인증 해제
export const deleteAuth = () => {
  mainStore.setItem('id', '');
  mainStore.setItem('expire', '');
};

// 토큰 유효기간 체크
export const isInValidToken = () =>
  dayjs(mainStore.getItem('expire')).isBefore(dayjs());

export const getId = () => mainStore.getItem('id');
