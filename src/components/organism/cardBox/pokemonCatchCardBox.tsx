import PokemonCatchCard from '@components/molecule/card/pokemonCatchCard';
import usePokemon from '@hooks/usePokemon';
import { useEffect, useState } from 'react';

const PokemonCatchCardBox = () => {
  const { getRandomPokemonNumbers } = usePokemon();
  const [pokemonIds, setPokemonIds] = useState<number[]>([]);

  useEffect(() => {
    setPokemonIds(getRandomPokemonNumbers());
  }, []);

  return (
    <>
      {pokemonIds.map((id, index) => (
        <PokemonCatchCard key={index} id={id}></PokemonCatchCard>
      ))}
    </>
  );
};

export default PokemonCatchCardBox;
