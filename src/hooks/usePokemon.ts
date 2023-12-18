import { useCallback } from 'react';
import useSWR from 'swr';
import { pokemonFetcher } from '@utils/fetcher';

const usePokemon = () => {
  const useGetPokemonQuery = (id: number) => {
    const { data } = useSWR(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
      pokemonFetcher,
      {
        dedupingInterval: 60000,
      },
    );
    return data;
  };

  const getRandomPokemonNumbers = useCallback(() => {
    const pokemonIds = [];
    for (let i = 0; i < 9; i++) {
      pokemonIds.push(Math.floor(Math.random() * 1000) + 1);
    }
    return pokemonIds;
  }, []);

  const isCatchPokemon = useCallback(() => {
    return Math.random() < 0.5;
  }, []);

  return { useGetPokemonQuery, getRandomPokemonNumbers, isCatchPokemon };
};

export default usePokemon;
