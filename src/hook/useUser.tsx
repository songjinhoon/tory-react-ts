import useSWR from 'swr';
import { IUser } from '@typing/db';
import fetcher from '@util/fetcher';
import { useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ISignInUser, ISignUpUser } from '@typing/user';

const useUser = () => {
  const navigate = useNavigate();
  const {
    data: user,
    mutate: userMutate,
    isLoading,
  } = useSWR<IUser | boolean>(`/api/users`, fetcher, {
    dedupingInterval: 60000, // 60초동안은 캐쉬에서 호출하겠다.
  });

  const signUp = useCallback(
    (params: ISignUpUser) => {
      axios
        .post(`/api/users`, params, { withCredentials: true })
        .then(async (response) => {
          if (response.status === 201) {
            toast.success('회원가입 성공~ 로그인 창으로 이동합니다~', { position: toast.POSITION.BOTTOM_CENTER });
            await userMutate();
            navigate('/sign-in');
          }
        })
        .catch((error) => {
          toast.error(error.response?.data, { position: 'bottom-center' });
        });
    },
    [userMutate, navigate],
  );

  const signIn = useCallback(
    (params: ISignInUser) => {
      axios
        .post(
          `/api/users/login`,
          {
            ...params,
          },
          {
            withCredentials: true,
          },
        )
        .then(async () => {
          await userMutate();
          navigate('/dashboard');
        })
        .catch((error) => {
          toast.error(error.response?.data, { position: toast.POSITION.BOTTOM_CENTER });
        });
    },
    [userMutate, navigate],
  );

  const logout = useCallback(() => {
    axios
      .post(`/api/users/logout`, null, {
        withCredentials: true,
      })
      .then(async () => {
        await userMutate(false, {
          revalidate: false,
        });
        navigate('/sign-in');
      });
  }, [userMutate, navigate]);

  return {
    user,
    isLoading,
    signUp,
    signIn,
    logout,
  };
};

export default useUser;
