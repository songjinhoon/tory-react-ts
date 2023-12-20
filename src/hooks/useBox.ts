import Api from '@utils/axiosConfig';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { pokemonFetcher } from '@utils/fetcher';
import { IBox, ICreateBox } from '@type/box';

const UseBox = () => {
  const { data: boxes, mutate: boxMutate } = useSWR(
    '/boxes',
    pokemonFetcher,
    {},
  );

  const createBox = async (params: ICreateBox) => {
    try {
      await Api.post(`/boxes`, { ...params });
    } catch (error: any) {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  const findByUserId = (userId: number) => {
    return boxes.filter((box: IBox) => box.userId === userId);
  };

  return { boxes, boxMutate, findByUserId, createBox };
};

export default UseBox;
