import usePokemon from '@hooks/usePokemon';
import { useEffect, useState } from 'react';
import useUser, { IUseUserHook } from '@hooks/useUser';
import PokemonItem from '@components/molecule/card/pokemonItem';

const PokemonField = () => {
  const { useGetPokemonsQuery, getRandomPokemonNumbers, getPokemonIdByUrl } =
    usePokemon();
  const [pokemonIds, setPokemonIds] = useState<number[]>([]);
  const { datas } = useGetPokemonsQuery();
  const pokemons = datas.filter((data: any) => pokemonIds.includes(data.id));
  const { user }: IUseUserHook = useUser();

  useEffect(() => {
    setPokemonIds(getRandomPokemonNumbers());
  }, []);

  useEffect(() => {
    if (pokemons) {
      console.log(pokemons);
    }
  }, [pokemons]);

  return (
    <>
      {pokemons &&
        user &&
        pokemons.length !== 0 &&
        pokemons.map((pokemon: any, index: number) => (
          <PokemonItem
            key={index}
            id={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            name={pokemon.name}
            isShowPokeBall={
              user.pokemons.filter((data: number) => data === pokemon.id)
                .length === 0
            }
          ></PokemonItem>
        ))}
    </>
  );
};

export default PokemonField;
