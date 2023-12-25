import useSWR from 'swr';
import { useCallback, useState } from 'react';
import { pokemonFetcher } from '@utils/fetcher';
import { IPokemon } from '@type/pokemon';

const DOMAIN = '/pokemons';

const usePokemon = () => {
  const { data: pokemons } = useSWR(DOMAIN, pokemonFetcher);

  const randomPokemonIds = getRandomPokemonNumbers();

  const [randomPokemons] = useState<IPokemon[]>(
    pokemons &&
      pokemons.filter((pokemon: IPokemon) =>
        randomPokemonIds.includes(pokemon.id),
      ),
  );

  const getPokemonIdByUrl = useCallback((url: string) => {
    return Number(
      url.substring(url.lastIndexOf('/pokemon/') + 9).replace('/', ''),
    );
  }, []);

  const isCatchPokemon = useCallback(() => {
    return Math.random() < 0.5;
  }, []);

  return {
    pokemons,
    randomPokemons,
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
