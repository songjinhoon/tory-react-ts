import { Error, Input, Label } from '../../page/auth/styles';
import React, { FC } from 'react';
import { UserInput } from '../../../type/input';

const AddressInput: FC<UserInput> = ({ register, errors }) => {
  return (
    <Label id="address-label">
      <span>Address</span>
      <div>
        <Input
          {...register('address', {
            required: '주소를 입력해주세요.',
          })}
        ></Input>
        {errors && <Error>{errors.message}</Error>}
      </div>
    </Label>
  );
};

export default AddressInput;
