import ModalLayout from '@component/popup/modal/ModalLayout';
import { useContext, useState } from 'react';
import PasswordConfirmForm from '@component/form/PasswordConfirmForm';
import { Button, Form, Input, Label } from '@page/auth/styles';
import { useForm } from 'react-hook-form';
import { ISignUpUser } from '@typing/user';
import ModalContext, { ModalContextValue } from '../../../context/modal';
import ModeContext, { modeKey, modeType } from '../../../context/mode';

const UserUpdateModal = () => {
  const { actions }: Partial<ModalContextValue> = useContext(ModalContext);
  const { state }: Partial<any> = useContext(ModeContext);
  const [{ title }] = useState({
    title: '사용자 관리 팝업',
  });
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

  return (
    <ModalLayout title={title} style={{ height: 300 }} isClose={false}>
      {state?.mode[modeKey.userUpdateModal] === modeType.confirm && (
        <PasswordConfirmForm></PasswordConfirmForm>
      )}
      {state?.mode[modeKey.userUpdateModal] === modeType.update && (
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
            <Button type={'button'} onClick={actions?.closeModals}>
              CANCEL
            </Button>
          </Form>
        </>
      )}
    </ModalLayout>
  );
};

export default UserUpdateModal;
