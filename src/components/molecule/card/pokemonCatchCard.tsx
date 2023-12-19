import useUser, { IUseUserHook } from '@hooks/useUser';
import usePokemon from '@hooks/usePokemon';
import PokemonItem from '@components/molecule/card/pokemonItem';

const PokemonCatchCard = ({ id }: { id: number }) => {
  const { user }: IUseUserHook = useUser();
  const { useGetPokemonQuery } = usePokemon();
  const pokemon = useGetPokemonQuery(id);

  const isShowPokeBall =
    user && user.pokemons.filter((data: number) => data === id).length === 0;

  return (
    <>
      {pokemon && (
        <PokemonItem
          id={id}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          name={pokemon.name}
          isShowPokeBall={isShowPokeBall}
        ></PokemonItem>
      )}
    </>
  );
};

export default PokemonCatchCard;
