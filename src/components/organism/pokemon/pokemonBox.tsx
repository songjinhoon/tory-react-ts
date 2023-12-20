import useUser, { IUseUserHook } from '@hooks/useUser';
import PokemonCard from '@components/molecule/card/pokemonCard';
import useBox from '@hooks/useBox';

const PokemonBox = () => {
  const { user }: IUseUserHook = useUser();
  const { getPartnerPokemon, getNotPartnerPokemon } = useBox();
  /*const pokemons =
    user && datas.filter((data: any) => user.pokemons.includes(data.id));*/

  return (
    <>
      {user &&
        getPartnerPokemon().map((pokemon: any, index: number) => (
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
      {user &&
        getNotPartnerPokemon().map((pokemon: any, index: number) => (
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
