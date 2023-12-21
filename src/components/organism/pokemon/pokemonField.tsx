import usePokemon from '@hooks/usePokemon';
import useUser, { IUseUserHook } from '@hooks/useUser';
import PokemonCard from '@components/molecule/card/pokemonCard';
import useBox from '@hooks/useBox';

const PokemonField = () => {
  const { user }: IUseUserHook = useUser();
  const { pokemons, getRandomPokemonIds } = usePokemon();
  const datas = pokemons.filter((data: any) =>
    getRandomPokemonIds().includes(data.id),
  );

  const { findByUserId } = useBox();
  const hasPokemonIds =
    user && findByUserId().map((data: any) => data.pokemon.id);

  return (
    <>
      {user &&
        datas.map((pokemon: any, index: number) => (
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
