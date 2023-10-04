import useSWR from 'swr';
import { IUser } from '@typing/db';
import fetcher from '@util/fetcher';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ISignInUser, ISignUpUser } from '@typing/user';
import axios from 'axios';
import Api from "@util/axiosConfig";
import { tokenProcess } from "@util/axiosInterceptor";

const useUser = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem('id');
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
        const response = await Api.post(`/api/users/sign-up`, params, {
          withCredentials: true,
        });
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
          localStorage.setItem('id', response.data.id);
          await tokenProcess('default');
          await userMutate();
          navigate('/dashboard');
        }
      } catch (error: any) {
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    [userMutate, navigate],
  );

  const logout = useCallback(async () => {
    await tokenProcess('logout');
    await userMutate();
    navigate('/sign-in');
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

  const userQuery = useCallback(async () => {
    const response = await Api.get('/api/users');
    console.log(response.data);
  }, []);

  /*  useEffect(() => {
                              console.log(user);
                              console.log(accessToken);
                            }, [user, accessToken]);*/

  return {
    user,
    isLoading,
    signUp,
    signIn,
    logout,
    userQuery,
    updateUser,
    isEqualPassword,
  };
};

export default useUser;
