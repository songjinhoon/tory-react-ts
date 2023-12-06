import { useNavigate } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
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
    /*<div id="container">/*
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
    </div>*/
  );
};

export default SignUpPage;
