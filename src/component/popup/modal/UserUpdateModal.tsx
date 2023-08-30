import ModalLayout from '@component/popup/modal/ModalLayout';
import ModalContext, { ModalContextValue } from '../../../context/modal';
import { useCallback, useContext, useState } from 'react';
import { Button, Error, Form, Input, Label } from '@page/auth/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignInUser, ISignUpUser } from '@typing/user';

const UserUpdateModal = () => {
  const { actions }: Partial<ModalContextValue> = useContext(ModalContext);
  const [title] = useState('사용자 관리 팝업');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpUser>({
    mode: 'onBlur',
  });

  const _onSubmit: SubmitHandler<ISignInUser> = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <ModalLayout title={title} style={{ height: 300 }} isClose={false}>
      <Form onSubmit={handleSubmit(_onSubmit)}>
        <Label>
          <span>Password</span>
          <div>
            <Input
              placeholder={'input password'}
              type={'password'}
              {...register('password', {
                required: '비밀번호는 필수입니다.',
              })}
            />
            {errors.password && <Error>{errors.password.message}</Error>}
          </div>
        </Label>
        <Button type="submit">OK</Button>
        <Button>CANCEL</Button>
      </Form>
    </ModalLayout>
  );
};

export default UserUpdateModal;
