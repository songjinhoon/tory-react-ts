import useSWR from 'swr';
import { useCallback } from 'react';
import { pokemonFetcher } from '@utils/fetcher';

const usePokemon = () => {
  const useGetPokemonsQuery = () => {
    const { data } = useSWR(
      `https://pokeapi.co/api/v2/pokemon?limit=1000`,
      pokemonFetcher,
      {
        suspense: true,
        dedupingInterval: 60000,
      },
    );
    return {
      datas: data.results.map((data: any) => ({
        ...data,
        id: getPokemonIdByUrl(data.url),
      })),
    };
  };

  const useGetPokemonQuery = (id: number) => {
    const { data } = useSWR(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
      pokemonFetcher,
      {
        suspense: true,
        dedupingInterval: 60000,
      },
    );
    return { data };
  };

  const getPokemonIdByUrl = useCallback((url: string) => {
    return Number(
      url.substring(url.lastIndexOf('/pokemon/') + 9).replace('/', ''),
    );
  }, []);

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

  return {
    useGetPokemonsQuery,
    useGetPokemonQuery,
    getPokemonIdByUrl,
    getRandomPokemonNumbers,
    isCatchPokemon,
  };
};

export default usePokemon;
