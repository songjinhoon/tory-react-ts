import 'bootstrap/dist/css/bootstrap.min.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
import { useCallback, useEffect } from 'react';
import { ISignInUser } from '@type/user';
import SignInTemplate from '@components/template/signInTemplate';

const SignInPage = () => {
  const navigate = useNavigate();
  const { user, signIn } = useUser();
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
    // 이거 url 직접입력해서 로그인페이지로 오는거 막기위해 필요함
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <>
      <SignInTemplate
        action={onSubmit}
        register={register}
        fields={[
          {
            name: 'username',
            errors: errors.username,
            option: {
              required: '이메일 주소는 필수입니다.',
              minLength: {
                value: 10,
                message: '10~20 사이의 길이만 가질 수 있습니다.',
              },
              maxLength: {
                value: 20,
                message: '10~20 사이의 길이만 가질 수 있습니다.',
              },
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: '이메일 형식을 확인해주세요.',
              },
            },
          },
          {
            name: 'password',
            errors: errors.password,
            option: {
              required: '비밀번호는 필수입니다.',
            },
          },
        ]}
      ></SignInTemplate>
      {/*      <Form onSubmit={handleSubmit(_onSubmit)}>
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
        w<ActionButton type={'submit'}>SignIn</ActionButton>
      </Form>*/}
      {/*<LinkContainer>
        아직 회원이 아니신가요?
        <Link to="/sign-up">회원가입 하러가기</Link>
      </LinkContainer>*/}
    </>
  );
};

export default SignInPage;
