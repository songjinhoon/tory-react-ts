import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { useCallback, useDebugValue } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ISignInUser, ISignUpUser, IUser, IUserColum } from '../type/user';
import Api from '../utils/axiosConfig';
import { createAuth, deleteAuth, getId } from '../utils/authConfig';

export type UseUserHookType = {
  user: any;
  userMutate: any;
  isLoading: any;
  signUp: any;
  signIn: any;
  logout: any;
  userQuery: any;
  updateUser: any;
  isEqualPassword: any;
};

const useUser = () => {
  const navigate = useNavigate();
  const {
    data: user,
    mutate: userMutate,
    isLoading,
  } = useSWR<IUser | boolean>(getId() ? `/users/${getId()}` : null, fetcher, {
    dedupingInterval: 60000, // 60초동안은 캐쉬에서 호출하겠다.
  });

  useDebugValue(user, (user) => user);
  useDebugValue('test');

  const signUp = useCallback(
    async (params: ISignUpUser) => {
      try {
        const response = await Api.post(`/users`, { ...params, pokemons: [] });
        if (response.status === 201) {
          toast.success('회원가입 성공~ 로그인 창으로 이동합니다~', {
            position: toast.POSITION.BOTTOM_CENTER,
          });
          await userMutate();
          navigate('/sign-in');
        }
      } catch (error: any) {
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    [userMutate, navigate],
  );

  const signIn = useCallback(
    async (params: ISignInUser) => {
      try {
        const response = await Api.get(`/users`);
        if (response.status === 200) {
          createAuth(response.data[0].id);
          // await userMutate(); 여기서 동작을 안한다 이유가 뭐지
          navigate('/dashboard');
        }
      } catch (error: any) {
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    [navigate],
  );

  const logout = useCallback(async () => {
    // await Api.get(`/users/${getId()}/logout`);
    deleteAuth();
    navigate('/sign-in');
  }, [navigate]);

  const isEqualPassword = useCallback((param: string) => {
    return param === '123';
  }, []);

  const updateUser = useCallback(
    async (params: ISignUpUser) => {
      const response = await Api.put(`/users/${getId()}`, {
        ...params,
      });
      if (response.status === 204) {
        alert('성공');
        await userMutate();
      } else {
        alert('실패야');
      }
    },
    [userMutate],
  );

  const userQuery = useCallback(async () => {
    const response = await Api.get('/users');
    console.log(response.data);
  }, []);

  const getValidOption = useCallback((option: IUserColum) => {
    switch (option) {
      case 'username': {
        return {
          required: '아이디는 필수입니다.',
          minLength: {
            value: 10,
            message: '10~20 사이의 길이만 가질 수 있습니다.',
          },
          maxLength: {
            value: 20,
            message: '10~20 사이의 길이만 가질 수 있습니다.',
          },
        };
      }
      case 'password': {
        return {
          required: '비밀번호는 필수입니다.',
        };
      }
      case 'nickname': {
        return {
          required: '닉네임은 필수입니다.',
          minLength: {
            value: 5,
            message: '5~20 사이의 길이만 가질 수 있습니다.',
          },
          maxLength: {
            value: 20,
            message: '5~20 사이의 길이만 가질 수 있습니다.',
          },
        };
      }
      case 'email': {
        return {
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
        };
      }
      case 'tellNum': {
        return {
          required: '전화번호를 입력해주세요.',
        };
      }
      case 'address': {
        return {
          required: '주소를 입력해주세요.',
        };
      }
    }
  }, []);

  return {
    user,
    userMutate,
    isLoading,
    signUp,
    signIn,
    logout,
    userQuery,
    updateUser,
    isEqualPassword,
    getValidOption,
  };
};

export default useUser;
