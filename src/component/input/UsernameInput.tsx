import React, { FC } from 'react';
import { Error, Input, Label } from '@page/auth/styles';
import { UserInput } from '@typing/input';

const UsernameInput: FC<UserInput> = ({ register, errors, options }) => {
  return (
    <Label id="username-label">
      <span>Email</span>
      <div>
        <Input
          style={options.readOnly ? { background: 'whitesmoke' } : {}}
          disabled={options.readOnly}
          {...register('username', {
            required: '이메일 주소는 필수입니다.',
            minLength: {
              value: 10,
              message: '10~20 사이의 길이만 가질 수 있습니다.',
            },
            maxLength: {
              value: 20,
              message: '10~20 사이의 길이만 가질 수 있습니다.',
            },
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: '이메일 형식을 확인해주세요.',
            },
          })}
        ></Input>
        {errors && <Error>{errors.message}</Error>}
      </div>
    </Label>
  );
};

export default UsernameInput;
