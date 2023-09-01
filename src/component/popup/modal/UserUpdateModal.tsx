import { useState } from 'react';
import PasswordConfirmForm from '@component/form/PasswordConfirmForm';
import { Error, Form, Input } from '@page/auth/styles';
import { useForm } from 'react-hook-form';
import { ISignUpUser } from '@typing/user';
import { useModeDispatch, useModeState } from '../../../context/mode';
import ModalLayout from '@component/popup/modal/ModalLayout';
import ActionForm from '@component/form/ActionForm';
import { useModalDispatch } from '../../../context/modal';
import { InputForm, Label } from '@component/form/styles';

const UserUpdateModal = () => {
  const modeState = useModeState();
  const modeDispatch = useModeDispatch();
  const modalDispatch = useModalDispatch();
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

  const _onCancel = () => {
    modalDispatch({
      type: 'closeModal',
    });
    modeDispatch({
      type: 'updateMode',
      key: 'userUpdateModal',
      value: 'confirm',
    });
  };

  console.log('UserUpdateModal Component Render');

  return (
    <>
      {modeState.userUpdateModal === 'confirm' && (
        <ModalLayout title={title} style={{ height: 400 }}>
          <PasswordConfirmForm></PasswordConfirmForm>
        </ModalLayout>
      )}
      {modeState.userUpdateModal === 'update' && (
        <ModalLayout title={title} style={{ height: 700 }}>
          <Form>
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
        </ModalLayout>
      )}
    </>
  );
};

export default UserUpdateModal;
