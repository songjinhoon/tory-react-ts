import { Form, Input } from '../../page/auth/styles';
import { ErrorMessage } from '@hookform/error-message';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignInUser, ISignUpUser } from '@type/user';
import { useCallback, useEffect } from 'react';
import useUser from '@hooks/useUser';
import { useModeDispatch } from '../../../context/mode';
import ActionForm from './ActionForm';
import { Error, InputForm, Label } from './styles';

const PasswordConfirmForm = () => {
  const { isEqualPassword } = useUser();
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

  useEffect(() => {
    watch((value, { name, type }) => console.log(value, name, type));
  }, [watch]);

  return (
    <Form onSubmit={handleSubmit(_onSubmit)}>
      <InputForm>
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
      </InputForm>
      <ActionForm></ActionForm>
    </Form>
  );
};

export default PasswordConfirmForm;
