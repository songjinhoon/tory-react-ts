import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpUser } from '@typing/user';
import { useCallback } from 'react';
import useUser from '@hook/useUser';
import { useModeDispatch } from '../../context/mode';
import { useModalDispatch } from '../../context/modal';
import { InputForm, Label } from '@component/form/styles';
import { Error, Form, Input } from '@page/auth/styles';
import ActionForm from '@component/form/ActionForm';

const UserUpdateForm = () => {
  const { updateUser } = useUser();
  const modeDispatch = useModeDispatch();
  const modalDispatch = useModalDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
    // watch,
  } = useForm<ISignUpUser>({
    // mode: 'onBlur',
    mode: 'onChange',
  });

  const _onSubmit: SubmitHandler<ISignUpUser> = useCallback(async (data) => {
    await updateUser(data);
  }, [updateUser]);

  const _onCancel = useCallback(() => {
    modalDispatch({
      type: 'closeModal',
    });
    modeDispatch({
      type: 'updateMode',
      key: 'userUpdateModal',
      value: 'confirm',
    });
  }, [modalDispatch, modeDispatch]);

  console.log('UserUpdateForm');

  return (
    <Form onSubmit={handleSubmit(_onSubmit)}>
      <InputForm>
        <Label id="nickname">
          <span>nickname</span>
          <div>
            <Input
              {...register('nickname', {
                required: '닉네임을 입력해주세요.',
                minLength: {
                  value: 5,
                  message: '5~20 사이의 길이만 가질 수 있습니다.',
                },
                maxLength: {
                  value: 20,
                  message: '5~20 사이의 길이만 가질 수 있습니다.',
                },
              })}
            />
          </div>
        </Label>
        {errors.nickname && <Error>{errors.nickname.message}</Error>}
        <Label id="tellNum">
          <span>tellNum</span>
          <div>
            <Input
              {...register('tellNum', {
                required: '핸드폰번호를 입력해주세요.',
              })}
            />
          </div>
        </Label>
        {errors.tellNum && <Error>{errors.tellNum.message}</Error>}
        <Label id="address">
          <span>address</span>
          <div>
            <Input
              {...register('address', {
                required: '주소를 입력해주세요.',
              })}
            />
          </div>
        </Label>
        {errors.address && <Error>{errors.address.message}</Error>}
      </InputForm>
      <ActionForm onCancel={_onCancel}></ActionForm>
    </Form>
  );
};

export default UserUpdateForm;
