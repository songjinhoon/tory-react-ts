import useSWR from 'swr';
import { useCallback, useState } from 'react';
import { pokemonFetcher } from '@utils/fetcher';

const usePokemon = () => {
  const [randomPokemonIds, setRandomPokemonIds] = useState<number[]>(
    getRandomPokemonNumbers(),
  );

  const { data: pokemons } = useSWR(
    `https://pokeapi.co/api/v2/pokemon?limit=1000`,
    pokemonFetcher,
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
    pokemons: pokemonDataInit(pokemons),
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

function pokemonDataInit(pokemons: any) {
  return pokemons.results.map((data: any) => ({
    ...data,
    id: Number(
      data.url
        .substring(data.url.lastIndexOf('/pokemon/') + 9)
        .replace('/', ''),
    ),
  }));
}
