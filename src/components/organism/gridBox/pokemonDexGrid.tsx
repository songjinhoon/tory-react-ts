import KendoGrid from '@components/organism/gridBox/kendoGrid';
import useSWR from 'swr';
import { pokemonFetcher } from '@utils/fetcher';
import { useEffect, useState } from 'react';

const PokemonDexGrid = () => {
  const { data, error, isLoading } = useSWR(
    'https://pokeapi.co/api/v2/pokemon',
    pokemonFetcher,
    {},
  );
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (!isLoading && data) {
      setPokemons(
        data.results.map((pokemon: any) => ({
          ...pokemon,
          resource: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url
            .substring(pokemon.url.lastIndexOf('/pokemon/') + 9)
            .replace('/', '')}.png`,
        })),
      );
      console.log(pokemons);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (pokemons) {
      console.log(pokemons);
    }
  }, [pokemons]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      {pokemons.length !== 0 && (
        <>
          <KendoGrid
            style={{ width: '700px' }}
            datas={pokemons}
            count={data.count}
            previous={data.previous}
            next={data.next}
            options={{
              columns: [
                {
                  key: 'resource',
                  value: 'profile',
                },
                {
                  key: 'name',
                  value: 'name',
                },
                {
                  key: 'url',
                  value: 'detail',
                },
              ],
            }}
          ></KendoGrid>
        </>
      )}
    </div>
  );
};

export default PokemonDexGrid;
