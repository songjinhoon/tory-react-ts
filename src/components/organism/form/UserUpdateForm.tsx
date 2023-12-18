import React, { useCallback, useEffect } from 'react';
import { Form } from '../../page/auth/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpUser } from '@type/user';
import useUser, { IUseUserHook } from '@hooks/useUser';

/*
 * 사용자 정보 변경 템플릿은 여러 화면에서 사용될 수 있다.
 * 하지만, 화면에 따라서 보여지는 형태는 다를 수 있다.
 * DEMO 에서는 Modal, Page 두곳에서 해당 폼을 사용하게된다.
 * 이곳에서 그 내용을 분기처리하여 관리하도록 한다.
 * */

type Props = {
  type: 'page' | 'modal';
  _onCancel: () => void;
};

const UserUpdateForm = ({ type, _onCancel }: Props) => {
  const { user, isLoading, updateUser }: IUseUserHook = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ISignUpUser>({
    mode: 'onBlur',
    // mode: 'onChange',
    defaultValues: {
      username: user?.username,
      nickname: user?.nickname,
      tellNum: user?.tellNum,
      address: user?.address,
      password: user?.password,
    },
  });

  useEffect(() => {
    if (!isLoading && user) {
      setValue('username', user.username);
      setValue('nickname', user.nickname);
      setValue('tellNum', user.tellNum);
      setValue('address', user.address);
      setValue('password', user.password);
    }
  }, [user, isLoading, setValue]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const _onSubmit: SubmitHandler<ISignUpUser> = useCallback(
    async (data) => {
      await updateUser(data);
    },
    [updateUser],
  );

  return (
    <Form onSubmit={handleSubmit(_onSubmit)}>
      {/*<InputForm>
        {type === 'page' && (
          <>
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
          </>
        )}
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
      </InputForm>
      {type === 'page' && <Button type="submit">업데이트</Button>}
      {type === 'modal' && <ActionForm onCancel={_onCancel}></ActionForm>}*/}
    </Form>
  );
};

export default UserUpdateForm;
