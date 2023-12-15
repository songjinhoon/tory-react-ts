import React, { FC } from 'react';
import Block from '@components/molecule/block';
import AuthButton from '@components/molecule/authButton';
import InputLabel from '@components/atom/inputLabel';
import { css } from '@emotion/react';

export interface AuthFormProps {
  type: 'signIn' | 'signUp';
  action: any;
  register: any;
  fields: any[];
}

const AuthForm: FC<AuthFormProps> = ({ type, action, register, fields }) => {
  return (
    <form onSubmit={action} css={formStyle}>
      {fields.map((field: any, index: number) => (
        <InputLabel key={++index} register={register} field={field} />
      ))}
      <Block></Block>
      <AuthButton type={type}></AuthButton>
    </form>
  );
};
export default AuthForm;

const formStyle = css`
  width: 70%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
