import Api from '@utils/axiosConfig';
import { toast } from 'react-toastify';

const UseBox = () => {
  const createBox = async (params: any) => {
    try {
      const response = await Api.post(`/boxes`, { ...params });
    } catch (error: any) {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  return { createBox };
};

export default UseBox;
