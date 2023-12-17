import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useUser from '@hooks/useUser';
import { useCallback, useEffect } from 'react';
import { ISignInUser } from '@type/user';
import AuthTemplate from '@components/template/auth/authTemplate';

const SignInPage = () => {
  const navigate = useNavigate();
  const { user, signIn, getValidOption } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInUser>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<ISignInUser> = useCallback(
    async (data) => {
      await signIn(data);
    },
    [signIn],
  );

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <>
      <AuthTemplate
        type={'signIn'}
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
        ]}
      ></AuthTemplate>
    </>
  );
};

export default SignInPage;
