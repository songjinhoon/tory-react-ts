import { Button, Error, Form, Input, Label } from '@page/auth/styles';
import { ErrorMessage } from '@hookform/error-message';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignInUser, ISignUpUser } from '@typing/user';
import { useCallback, useContext, useEffect } from 'react';
import useUser from '@hook/useUser';
import ModalContext, { ModalContextValue } from '../../context/modal';

const PasswordConfirmForm = () => {
  const { isEqualPassword } = useUser();
  const { actions }: Partial<ModalContextValue> = useContext(ModalContext);
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
    },
    [isEqualPassword, setError],
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
      <Button type={'button'} onClick={actions?.closeModals}>
        CANCEL
      </Button>
    </Form>
  );
};

export default PasswordConfirmForm;
