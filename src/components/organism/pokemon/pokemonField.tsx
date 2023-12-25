import usePokemon from '@hooks/usePokemon';
import PokemonCard from '@components/molecule/card/pokemonCard';
import useBox from '@hooks/useBox';
import { IPokemon } from '@type/pokemon';
import { IBox } from '@type/box';
import { useMemo } from 'react';

const PokemonField = () => {
  const { randomPokemons } = usePokemon();
  const { myBoxes } = useBox();

  const hasPokemonIds = useMemo(() => {
    return myBoxes.map((box: IBox) => box.pokemon.id);
  }, [myBoxes]);

  return (
    <>
      {randomPokemons.map((pokemon: IPokemon, index: number) => (
        <PokemonCard
          key={index}
          id={pokemon.id}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          name={pokemon.name}
          isShowPokeBall={!hasPokemonIds.includes(pokemon.id)}
        ></PokemonCard>
      ))}
    </>
  );
};

export default PokemonField;
