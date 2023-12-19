import Api from '@utils/axiosConfig';
import { toast } from 'react-toastify';
import { useCallback } from 'react';

const UseBox = () => {
  const createBox = useCallback(async (params) => {
    try {
      const response = await Api.post(`/boxes`, { ...params });
    } catch (error: any) {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  }, []);

  return { createBox };
};

export default UseBox;
