export interface IUser {
  id: number;
  username: string;
  password: string;
  nickname: string;
  email: string;
  tellNum: string;
  address: string;
}

export type IUserColum = keyof IUser;

export interface ISignUpUser {
  username: string;
  nickname: string;
  tellNum: string;
  address: string;
  password: string;
}

export interface ISignInUser {
  username: string;
  password: string;
}
