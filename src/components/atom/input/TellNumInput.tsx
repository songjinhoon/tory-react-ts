import { Error, Input, Label } from '../../page/auth/styles';
import React, { FC } from 'react';
import { UserInput } from '../../../type/input';

const TellNumInput: FC<UserInput> = ({ register, errors }) => {
  return (
    <Label id="tellNum-label">
      <span>TellNum</span>
      <div>
        <Input
          {...register('tellNum', {
            required: '전화번호를 입력해주세요.',
          })}
        ></Input>
        {errors && <Error>{errors.message}</Error>}
      </div>
    </Label>
  );
};

export default TellNumInput;
