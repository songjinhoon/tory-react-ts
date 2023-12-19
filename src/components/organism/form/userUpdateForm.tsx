import React, { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpUser } from '@type/user';
import useUser, { IUseUserHook } from '@hooks/useUser';
import InputLabel from '@components/atom/inputLabel';
import FormAction from '@components/organism/form/formAction';

type Props = {
  type: 'page' | 'modal';
  _onCancel: () => void;
};

const UserUpdateForm = ({ type, _onCancel }: Props) => {
  const { user, isLoading, updateUser, getValidOption }: IUseUserHook =
    useUser();
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
    <form onSubmit={handleSubmit(_onSubmit)}>
      <InputLabel
        register={register}
        field={{
          name: 'username',
          errors: errors.username,
          option: getValidOption('username'),
          disabled: true,
        }}
      />
      <InputLabel
        register={register}
        field={{
          name: 'password',
          errors: errors.password,
          option: getValidOption('password'),
          disabled: true,
        }}
      />
      <InputLabel
        register={register}
        field={{
          name: 'nickname',
          errors: errors.nickname,
          option: getValidOption('nickname'),
        }}
      />
      <InputLabel
        register={register}
        field={{
          name: 'tellNum',
          errors: errors.tellNum,
          option: getValidOption('tellNum'),
        }}
      />
      <InputLabel
        register={register}
        field={{
          name: 'address',
          errors: errors.address,
          option: getValidOption('address'),
        }}
      />
      <FormAction onCancel={_onCancel}></FormAction>
    </form>
  );
};

export default UserUpdateForm;
