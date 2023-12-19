import useUser, { IUseUserHook } from '@hooks/useUser';
import usePokemon from '@hooks/usePokemon';
import PokemonCard from '@components/molecule/card/pokemonCard';

const PokemonBox = () => {
  const { user }: IUseUserHook = useUser();
  const { useGetPokemonsQuery } = usePokemon();
  const { datas } = useGetPokemonsQuery();
  const pokemons =
    user && datas.filter((data: any) => user.pokemons.includes(data.id));

  return (
    <>
      {user &&
        pokemons.map((pokemon: any, index: number) => (
          <PokemonCard
            key={index}
            id={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            name={pokemon.name}
            isShowPokeBall={
              user.pokemons.filter((data: number) => data === pokemon.id)
                .length === 0
            }
          ></PokemonCard>
        ))}
    </>
  );
};

export default PokemonBox;
