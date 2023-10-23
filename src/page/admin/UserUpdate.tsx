import { useNavigate } from 'react-router-dom';
import useUser from '@hook/useUser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpUser } from '@typing/user';
import React, { useCallback, useEffect } from 'react';
import Header from '@component/layout/Header';
import { AdminBlock, Content } from '@page/admin/styles';
import { Button, Form } from '@page/auth/styles';
import LeftMenu from '@component/layout/LeftMenu';
import PasswordInput from '@component/input/PasswordInput';
import UsernameInput from '@component/input/UsernameInput';
import NicknameInput from '@component/input/NicknameInput';
import TellNumInput from '@component/input/TellNumInput';
import AddressInput from '@component/input/AddressInput';

const UserUpdate = () => {
  const navigate = useNavigate();
  const {
    user,
    isLoading,
    updateUser,
  }: { user: any; isLoading: any; updateUser: any } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ISignUpUser>({
    mode: 'onBlur',
    defaultValues: {
      username: user?.username,
      nickname: user?.nickname,
      tellNum: user?.tellNum,
      address: user?.address,
      password: user?.password,
    },
  });

  const _onSubmit: SubmitHandler<ISignUpUser> = useCallback(async (data) => {
    await updateUser(data);
  }, []);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/sign-in');
    }
    if (!isLoading && user) {
      setValue('username', user.username);
      setValue('nickname', user.nickname);
      setValue('tellNum', user.tellNum);
      setValue('address', user.address);
      setValue('password', user.password);
    }
  }, [navigate, user, isLoading]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <>
      <Header></Header>
      <AdminBlock>
        <LeftMenu></LeftMenu>
        <Content>
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
            <Button type="submit">업데이트</Button>
          </Form>
        </Content>
      </AdminBlock>
    </>
  );
};

export default UserUpdate;
