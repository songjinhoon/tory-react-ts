import { useNavigate } from 'react-router-dom';
import useUser from '@hooks/useUser';
import { SubmitHandler, useForm } from 'react-hook-form';
import React, { useCallback, useEffect } from 'react';
import { ISignUpUser } from '@type/user';
import AuthTemplate from '@components/template/auth/authTemplate';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { user, signUp, getValidOption } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpUser>({
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<ISignUpUser> = useCallback(
    async (data) => {
      await signUp(data);
    },
    [signUp],
  );

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <>
      <AuthTemplate
        type={'signUp'}
        action={handleSubmit(onSubmit)}
        register={register}
        fields={[
          {
            name: 'username',
            errors: errors.username,
            option: getValidOption('username'),
          },
          {
            name: 'password',
            errors: errors.password,
            option: getValidOption('password'),
          },
          {
            name: 'nickname',
            errors: errors.nickname,
            option: getValidOption('nickname'),
          },
          {
            name: 'email',
            errors: errors.email,
            option: getValidOption('email'),
          },
          {
            name: 'tellNum',
            errors: errors.tellNum,
            option: getValidOption('tellNum'),
          },
          {
            name: 'address',
            errors: errors.address,
            option: getValidOption('address'),
          },
        ]}
      ></AuthTemplate>
    </>
  );
};

export default SignUpPage;
