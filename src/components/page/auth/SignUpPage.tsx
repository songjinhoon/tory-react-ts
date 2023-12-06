import { Button, Form, Header, LinkContainer } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
import { SubmitHandler, useForm } from 'react-hook-form';
import React, { useCallback, useEffect } from 'react';
import UsernameInput from '@components/atom/input/UsernameInput';
import PasswordInput from '@components/atom/input/PasswordInput';
import NicknameInput from '@components/atom/input/NicknameInput';
import TellNumInput from '@components/atom/input/TellNumInput';
import AddressInput from '@components/atom/input/AddressInput';
import { ISignUpUser } from '@type/user';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { user, signUp } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpUser>({
    mode: 'onBlur',
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
          options={{ readOnly: false }}
        />
        <PasswordInput
          register={register}
          errors={errors.password}
          options={{ readOnly: false }}
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
