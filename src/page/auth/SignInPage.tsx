import { Button, Form, Header, LinkContainer } from '@page/auth/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ISignInUser } from '@typing/user';
import useUser from '@hook/useUser';
import { useCallback, useEffect } from 'react';
import UsernameInput from '@component/input/UsernameInput';
import PasswordInput from '@component/input/PasswordInput';

const SignInPage = () => {
  const navigate = useNavigate();
  const { user, signIn } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInUser>({
    mode: 'onChange',
  });

  const _onSubmit: SubmitHandler<ISignInUser> = useCallback(
    async (data) => {
      await signIn(data);
    },
    [signIn],
  );

  useEffect(() => {
    // 이거 url 직접입력해서 로그인페이지로 오는거 막기위해 필요함
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div id="container">
      <Header>DEMO</Header>
      <Form onSubmit={handleSubmit(_onSubmit)}>
        <UsernameInput
          register={register}
          errors={errors.username}
          options={{}}
        />
        <PasswordInput
          register={register}
          errors={errors.password}
          options={{}}
        />
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?
        <Link to="/sign-up">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default SignInPage;
