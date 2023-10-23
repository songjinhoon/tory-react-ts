import { Error, Input, Label } from '@page/auth/styles';
import React, { FC } from 'react';
import { UserInput } from '@typing/input';

const PasswordInput: FC<UserInput> = ({ register, errors, options }) => {
  return (
    <Label id="password-label">
      <span>Password</span>
      <div>
        <Input
          style={options.readOnly ? { background: 'whitesmoke' } : {}}
          disabled={options.readOnly}
          readOnly={options.readOnly}
          type={'password'}
          {...register('password', {
            required: '비밀번호는 필수입니다.',
          })}
        ></Input>
        {errors && <Error>{errors.message}</Error>}
      </div>
    </Label>
  );
};

export default PasswordInput;

