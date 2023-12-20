import usePokemon from '@hooks/usePokemon';
import useUser, { IUseUserHook } from '@hooks/useUser';
import PokemonCard from '@components/molecule/card/pokemonCard';
import useBox from '@hooks/useBox';

const PokemonField = () => {
  const { user }: IUseUserHook = useUser();
  const { useGetPokemonsQuery, getRandomPokemonNumbers } = usePokemon();
  const { datas } = useGetPokemonsQuery();
  const pokemonIds = getRandomPokemonNumbers();
  const pokemons =
    user && datas.filter((data: any) => pokemonIds.includes(data.id));

  const { findByUserId } = useBox();
  const hasPokemonIds =
    user && findByUserId(user.id).map((data: any) => data.pokemon.id);

  return (
    <>
      {user &&
        pokemons.map((pokemon: any, index: number) => (
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
