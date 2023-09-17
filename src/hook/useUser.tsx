import useSWR from 'swr';
import { IUser } from '@typing/db';
import fetcher from '@util/fetcher';
import { useCallback, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ISignInUser, ISignUpUser } from '@typing/user';
import { deleteCookie, getCookie, setCookie } from '@util/utils';

let accessToken = '';
let id: any = null;

const useUser = () => {
  const navigate = useNavigate();

  const {
    data: user,
    mutate: userMutate,
    isLoading,
  } = useSWR<IUser | boolean>(id ? `/api/users/${id}` : null, fetcher, {
    dedupingInterval: 60000, // 60초동안은 캐쉬에서 호출하겠다.
  });

  const signUp = useCallback(
    async (params: ISignUpUser) => {
      try {
        const response = await axios.post(`/api/users/sign-up`, params, {
          withCredentials: true,
        });
        if (response.status === 201) {
          toast.success('회원가입 성공~ 로그인 창으로 이동합니다~', {
            position: toast.POSITION.BOTTOM_CENTER,
          });
          await userMutate();
          navigate('/sign-in');
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.message, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      }
    },
    [userMutate, navigate],
  );

  const signIn = useCallback(
    async (params: ISignInUser) => {
      try {
        const response = await axios.post(
          `/api/users/sign-in`,
          {
            ...params,
          },
          {
            withCredentials: true,
          },
        );
        if (response.status === 200) {
          // accessToken = getCookie('access_token');
          id = response.data.id;
          axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie(
            'access_token',
          )}`;
          deleteCookie('access_token');

          await userMutate();
          navigate('/dashboard');
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.message, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      }
    },
    [userMutate, navigate, getCookie],
  );

  const refresh = useCallback(() => {}, []);

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

  const isEqualPassword = useCallback((param: string) => {
    return param === '123';
  }, []);

  const updateUser = useCallback((params: ISignUpUser) => {
    console.log(params);
    return {
      status: 204,
    };
  }, []);

  useEffect(() => {
    console.log(user);
    console.log(accessToken);
  }, [user, accessToken]);

  return {
    user,
    isLoading,
    signUp,
    signIn,
    logout,
    isEqualPassword,
    updateUser,
  };
};

export default useUser;
