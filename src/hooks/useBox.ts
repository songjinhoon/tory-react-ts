import Api from '@utils/axiosConfig';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { pokemonFetcher } from '@utils/fetcher';
import { IBox, ICreateBox } from '@type/box';
import { useCallback } from 'react';
import PokemonApi from '@utils/pokemonApiConfig';

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

  const updateBox = useCallback(
    async (id: number, params: any) => {
      const response = await PokemonApi.put(`/boxes/${id}`, { ...params });
      if (response.status === 204 || response.status === 200) {
        await boxMutate();
      }
    },
    [boxMutate],
  );

  const findByUserId = (userId: number) => {
    if (boxes.length === 0) {
      return [];
    }
    return boxes.filter((box: IBox) => box.userId === userId);
  };

  const getPartnerPokemon = useCallback(
    (userId: number) => {
      if (boxes.length === 0) {
        return [];
      }
      return boxes.filter(
        (box: IBox) => box.isPartner && box.userId === userId,
      );
    },
    [boxes],
  );

  const getNotPartnerPokemon = useCallback(
    (userId: number) => {
      if (boxes.length === 0) {
        return [];
      }
      return boxes.filter(
        (box: IBox) => !box.isPartner && box.userId === userId,
      );
    },
    [boxes],
  );

  const findBoxByUserIdAndPokemonId = (userId: number, pokemonId: number) => {
    return boxes.find(
      (box: IBox) => box.userId === userId && box.pokemon.id === pokemonId,
    );
  };

  const isPossibleRegisterPartnerPokemon = useCallback(
    (userId: number) => {
      return (
        boxes.filter((box: IBox) => box.userId === userId && box.isPartner)
          .length < 6
      );
    },
    [boxes],
  );

  return {
    boxes,
    boxMutate,
    findBoxByUserIdAndPokemonId,
    findByUserId,
    createBox,
    updateBox,
    isPossibleRegisterPartnerPokemon,
    getPartnerPokemon,
    getNotPartnerPokemon,
  };
};

export default UseBox;
