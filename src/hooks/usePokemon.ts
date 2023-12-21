import useSWR from 'swr';
import { useCallback, useState } from 'react';
import { pokemonFetcher } from '@utils/fetcher';

const usePokemon = () => {
  const [randomPokemonIds, setRandomPokemonIds] = useState<number[]>(
    getRandomPokemonNumbers(),
  );

  const { data } = useSWR(
    `https://pokeapi.co/api/v2/pokemon?limit=1000`,
    pokemonFetcher,
    {
      suspense: true,
      dedupingInterval: 60000,
    },
  );

  const getRandomPokemonIds = useCallback(() => {
    return randomPokemonIds;
  }, [randomPokemonIds]);

  const updateRandomPokemonIds = useCallback(() => {
    setRandomPokemonIds(getRandomPokemonNumbers());
  }, []);

  const getPokemonIdByUrl = useCallback((url: string) => {
    return Number(
      url.substring(url.lastIndexOf('/pokemon/') + 9).replace('/', ''),
    );
  }, []);

  const isCatchPokemon = useCallback(() => {
    return Math.random() < 0.5;
  }, []);

  return {
    pokemons: data.results.map((data: any) => ({
      ...data,
      id: getPokemonIdByUrl(data.url),
    })),
    getRandomPokemonIds,
    updateRandomPokemonIds,
    getPokemonIdByUrl,
    isCatchPokemon,
  };
};

export default usePokemon;

function getRandomPokemonNumbers() {
  const pokemonIds = [];
  for (let i = 0; i < 9; i++) {
    pokemonIds.push(Math.floor(Math.random() * 1000) + 1);
  }
  return pokemonIds;
}
