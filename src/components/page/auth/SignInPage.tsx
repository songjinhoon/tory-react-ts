import 'bootstrap/dist/css/bootstrap.min.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
import { useCallback, useEffect } from 'react';
import { ISignInUser } from '@type/user';
import SignInTemplate from '@components/template/auth/signInTemplate';

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
      <SignInTemplate
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
      ></SignInTemplate>
    </>
  );
};

export default SignInPage;
