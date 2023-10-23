import {
  Button,
  Error,
  Form,
  Header,
  Input,
  Label,
  LinkContainer,
} from '@page/auth/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ISignInUser } from '@typing/user';
import useUser from '@hook/useUser';
import { useCallback } from 'react';

const SignIn = () => {
  const { signIn } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInUser>({
    mode: 'onBlur',
  });

  const _onSubmit: SubmitHandler<ISignInUser> = useCallback(
    async (data) => {
      await signIn(data);
    },
    [signIn],
  );

  return (
    <div id="container">
      <Header>DEMO</Header>
      <Form onSubmit={handleSubmit(_onSubmit)}>
        <Label id="username-label">
          <span>Email</span>
          <div>
            <Input
              {...register('username', {
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
              })}
            />
            {errors.username && <Error>{errors.username.message}</Error>}
          </div>
        </Label>
        <Label id="password-label">
          <span>Password</span>
          <div>
            <Input
              type={'password'}
              {...register('password', {
                required: '비밀번호는 필수입니다.',
              })}
            />
            {errors.password && <Error>{errors.password.message}</Error>}
          </div>
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?
        <Link to="/sign-up">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default SignIn;
