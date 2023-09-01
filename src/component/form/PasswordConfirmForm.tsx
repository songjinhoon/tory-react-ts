import { Button, Error, Form, Input, Label } from '@page/auth/styles';
import { ErrorMessage } from '@hookform/error-message';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignInUser, ISignUpUser } from '@typing/user';
import { useCallback, useEffect } from 'react';
import useUser from '@hook/useUser';
import { useModeDispatch } from '../../context/mode';
import { useModalDispatch } from '../../context/modal';

const PasswordConfirmForm = () => {
  const { isEqualPassword } = useUser();
  const modalDispatch = useModalDispatch();
  const modeDispatch = useModeDispatch();

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

  const _onSubmit: SubmitHandler<ISignInUser> = useCallback(
    (data) => {
      if (!isEqualPassword(data.password)) {
        setError('password', {
          type: 'mismatch',
          message: 'password mismatch',
        });
        return false;
      }
      modeDispatch({
        type: 'updateMode',
        key: 'userUpdateModal',
        value: 'update',
      });
    },
    [isEqualPassword, setError, modeDispatch],
  );

  console.log('ㅎ');

  useEffect(() => {
    watch((value, { name, type }) => console.log(value, name, type));
  }, [watch]);

  return (
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
        </div>
      </Label>
      <ErrorMessage
        errors={errors}
        name={'password'}
        render={({ message }) => <Error>{message}</Error>}
      />
      {/*{errors.password && <Error>{errors.password.message}</Error>}*/}
      <Button type={'submit'}>OK</Button>
      <Button
        type={'button'}
        onClick={() => modalDispatch({ type: 'closeModal' })}
      >
        CANCEL
      </Button>
    </Form>
  );
};

export default PasswordConfirmForm;
