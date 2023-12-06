import { Form } from 'react-bootstrap';
import InputLabel from '@components/atom/inputLabel';
import { FC } from 'react';
import Block from '@components/molecule/block';
import AuthButton from '@components/molecule/authButton';

export interface AuthFormProps {
  type: 'signIn' | 'signUp';
  action: any;
  register: any;
  fields: any[];
}

const AuthForm: FC<AuthFormProps> = ({ type, action, register, fields }) => {
  return (
    <Form
      style={
        type === 'signIn'
          ? { width: '70%', flex: '2' }
          : { width: '70%', flex: '3' }
      }
      onSubmit={action}
    >
      {fields.map((field: any, index: number) => (
        <InputLabel
          key={++index}
          register={register}
          field={field}
        ></InputLabel>
      ))}
      <Block></Block>
      <AuthButton type={type}></AuthButton>
    </Form>
  );
};
export default AuthForm;
