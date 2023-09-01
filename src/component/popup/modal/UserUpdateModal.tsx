import ModalLayout from '@component/popup/modal/ModalLayout';
import { useState } from 'react';
import PasswordConfirmForm from '@component/form/PasswordConfirmForm';
import { Button, Form, Input, Label } from '@page/auth/styles';
import { useForm } from 'react-hook-form';
import { ISignUpUser } from '@typing/user';
import { useModeDispatch, useModeState } from '../../../context/mode';
import { useModalDispatch } from '../../../context/modal';

const UserUpdateModal = () => {
  const modalDispatch = useModalDispatch();
  const modeState = useModeState();
  const modeDispatch = useModeDispatch();
  const [title] = useState<string>('사용자 관리 팝업');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<ISignUpUser>({
    // mode: 'onBlur',
    mode: 'onChange',
  });

  const userUpdateModalCancel = () => {
    modalDispatch({ type: 'closeModal' });
    modeDispatch({
      type: 'updateMode',
      key: 'userUpdateModal',
      value: 'confirm',
    });
  };

  return (
    <ModalLayout title={title} style={{ height: 300 }} isClose={false}>
      {modeState.userUpdateModal === 'confirm' && (
        <PasswordConfirmForm></PasswordConfirmForm>
      )}
      {modeState.userUpdateModal === 'update' && (
        <>
          <Form>
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
            <Label id="password-label">
              <span>Password</span>
              <div>
                <Input
                  type={'password'}
                  {...register('password', {
                    required: '비밀번호를 입력해주세요.',
                  })}
                />
              </div>
            </Label>
            <Button type={'submit'}>UPDATE</Button>
            <Button type={'button'} onClick={userUpdateModalCancel}>
              CANCEL
            </Button>
          </Form>
        </>
      )}
    </ModalLayout>
  );
};

export default UserUpdateModal;
