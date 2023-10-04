import { Cookies } from 'react-cookie';

const cookie = new Cookies();

/*
export const setCookie = (name: string, value: string, options: any) => {
  return cookie.set(name, value, { ...options });
};
*/

export const getCookie = (name: string) => {
  return cookie.get(name);
};

export const deleteCookie = (name: string) => {
  cookie.remove(name);
};
