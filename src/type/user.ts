export interface ISignUpUser {
  username: string;
  password: string;
  nickname: string;
  email: string;
  tellNum: string;
  address: string;
}

export interface ISignInUser {
  username: string;
  password: string;
}

export interface IUser extends ISignUpUser {
  id: number;
}

export type IUserColum = keyof IUser;

export interface IUpdateUser extends ISignUpUser {
  pokemons: [];
}
