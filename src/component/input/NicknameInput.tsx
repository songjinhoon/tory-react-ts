import { Error, Input, Label } from '@page/auth/styles';
import React, { FC } from 'react';
import { UserInput } from '@typing/input';

const NicknameInput: FC<UserInput> = ({ register, errors }) => {
  return (
    <Label id="nickname-label">
      <span>Nickname</span>
      <div>
        <Input
          {...register('nickname', {
            required: '닉네임은 필수입니다.',
            minLength: {
              value: 5,
              message: '5~20 사이의 길이만 가질 수 있습니다.',
            },
            maxLength: {
              value: 20,
              message: '5~20 사이의 길이만 가질 수 있습니다.',
            },
          })}
        ></Input>
        {errors && <Error>{errors.message}</Error>}
      </div>
    </Label>
  );
};

export default NicknameInput;
