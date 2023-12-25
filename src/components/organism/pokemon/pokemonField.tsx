import usePokemon from '@hooks/usePokemon';
import PokemonCard from '@components/molecule/card/pokemonCard';
import useBox from '@hooks/useBox';
import { IPokemon } from '@type/pokemon';
import { IBox } from '@type/box';

const PokemonField = () => {
  const { pokemons, getRandomPokemonIds } = usePokemon();
  const renderPokemons = pokemons.filter((pokemon: IPokemon) =>
    getRandomPokemonIds().includes(pokemon.id),
  );

  const { findByUserId } = useBox();
  const hasPokemonIds = findByUserId().map((box: IBox) => box.pokemon.id);

  return (
    <>
      {renderPokemons.map((pokemon: IPokemon, index: number) => (
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
