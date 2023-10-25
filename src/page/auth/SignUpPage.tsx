import { Button, Form, Header, LinkContainer } from '@page/auth/styles';
import { Link, useNavigate } from 'react-router-dom';
import useUser from '@hook/useUser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpUser } from '@typing/user';
import React, { useCallback, useEffect } from 'react';
import UsernameInput from '@component/input/UsernameInput';
import PasswordInput from '@component/input/PasswordInput';
import NicknameInput from '@component/input/NicknameInput';
import TellNumInput from '@component/input/TellNumInput';
import AddressInput from '@component/input/AddressInput';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { user, signUp } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpUser>({
    mode: 'onChange',
  });

  const _onSubmit: SubmitHandler<ISignUpUser> = useCallback(
    async (data) => {
      await signUp(data);
    },
    [signUp],
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
          options={{ readOnly: true }}
        />
        <PasswordInput
          register={register}
          errors={errors.password}
          options={{ readOnly: true }}
        />
        <NicknameInput
          register={register}
          errors={errors.nickname}
          options={{}}
        />
        <TellNumInput
          register={register}
          errors={errors.tellNum}
          options={{}}
        />
        <AddressInput
          register={register}
          errors={errors.address}
          options={{}}
        />
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        회원이신가요?
        <Link to="/sign-in">로그인 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default SignUpPage;
