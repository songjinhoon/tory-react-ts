import useSWR from 'swr';
import { pokemonFetcher } from '@utils/fetcher';
import { IBox, ICreateBox } from '@type/box';
import { useCallback } from 'react';
import PokemonApi from '@utils/pokemonApiConfig';
import useUser, { IUseUserHook } from '@hooks/useUser';

const DOMAIN = '/boxes';

const UseBox = () => {
  const { user }: IUseUserHook = useUser();
  const { data: boxes, mutate: boxMutate } = useSWR(DOMAIN, pokemonFetcher);

  const createBox = useCallback(
    async (box: ICreateBox) => {
      await PokemonApi.post(DOMAIN, { ...box });
      await boxMutate();
    },
    [boxMutate],
  );

  const updateBox = useCallback(
    async (box: IBox) => {
      const response = await PokemonApi.put(`${DOMAIN}/${box.id}`, { ...box });
      if (response.status === 204 || response.status === 200) {
        await boxMutate();
      }
    },
    [boxMutate],
  );

  const findByUserId = useCallback(() => {
    return boxes.filter((box: IBox) => box.userId === user.id);
  }, [boxes, user]);

  const findByUserIdAndIsPartner = useCallback(() => {
    return boxes.filter((box: IBox) => box.isPartner && box.userId === user.id);
  }, [boxes, user]);

  const findByUserIdAndNotIsPartner = useCallback(() => {
    return boxes.filter(
      (box: IBox) => !box.isPartner && box.userId === user.id,
    );
  }, [boxes, user]);

  const findByUserIdAndPokemonId = useCallback(
    (pokemonId: number) => {
      return boxes.find(
        (box: IBox) => box.userId === user.id && box.pokemon.id === pokemonId,
      );
    },
    [boxes, user],
  );

  const isPossibleRegisterPartnerPokemon = useCallback(() => {
    return (
      boxes.filter((box: IBox) => box.userId === user.id && box.isPartner)
        .length < 6
    );
  }, [boxes, user]);

  return {
    boxes,
    boxMutate,
    createBox,
    updateBox,
    findByUserId,
    findByUserIdAndIsPartner,
    findByUserIdAndNotIsPartner,
    findByUserIdAndPokemonId,
    isPossibleRegisterPartnerPokemon,
  };
};

export default UseBox;
