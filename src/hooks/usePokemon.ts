import { useCallback } from 'react';
import PokemonApi from '@utils/pokemonApiConfig';

const usePokemon = () => {
  const findById = useCallback(async (id: number) => {
    const response = await PokemonApi.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    return response.data;
  }, []);

  const getRandomPokemonNumbers = useCallback(() => {
    return [
      Math.floor(Math.random() * 1000) + 1,
      Math.floor(Math.random() * 1000) + 1,
      Math.floor(Math.random() * 1000) + 1,
      Math.floor(Math.random() * 1000) + 1,
      Math.floor(Math.random() * 1000) + 1,
      Math.floor(Math.random() * 1000) + 1,
      Math.floor(Math.random() * 1000) + 1,
      Math.floor(Math.random() * 1000) + 1,
      Math.floor(Math.random() * 1000) + 1,
    ];
  }, []);

  const isCatchPokemon = useCallback(() => {
    return Math.random() < 0.5;
  }, []);

  return { findById, getRandomPokemonNumbers, isCatchPokemon };
};

export default usePokemon;
