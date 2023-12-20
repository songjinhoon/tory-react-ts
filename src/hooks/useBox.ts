import Api from '@utils/axiosConfig';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { pokemonFetcher } from '@utils/fetcher';
import { IBox, ICreateBox } from '@type/box';
import { useCallback, useEffect } from 'react';

const UseBox = () => {
  const { data: boxes, mutate: boxMutate } = useSWR('/boxes', pokemonFetcher, {
    suspense: true,
    dedupingInterval: 60000,
  });

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
    if (boxes.length === 0) {
      return [];
    }
    return boxes.filter((box: IBox) => box.userId === userId);
  };

  const test = (params: any, userId: any) => {
    return params.filter((box: IBox) => box.userId === userId);
  };

  const getPartnerPokemon = useCallback(() => {
    if (boxes.length === 0) {
      return [];
    }
    return boxes.filter((box: IBox) => box.isPartner);
  }, [boxes]);

  const getNotPartnerPokemon = useCallback(() => {
    if (boxes.length === 0) {
      return [];
    }
    return boxes.filter((box: IBox) => !box.isPartner);
  }, [boxes]);

  useEffect(() => {
    console.log('debug');
    console.log(boxes);
  }, [boxes]);

  return {
    boxes,
    boxMutate,
    findByUserId,
    test,
    createBox,
    getPartnerPokemon,
    getNotPartnerPokemon,
  };
};

export default UseBox;
