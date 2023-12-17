import PokemonCatchCard from '@components/molecule/card/pokemonCatchCard';
import usePokemon from '@hooks/usePokemon';

const PokemonCatchCardBox = () => {
  const { getRandomPokemonNumbers } = usePokemon();

  return (
    <>
      {getRandomPokemonNumbers().map((id, index) => (
        <PokemonCatchCard key={index} id={id}></PokemonCatchCard>
      ))}
    </>
  );
};

export default PokemonCatchCardBox;
