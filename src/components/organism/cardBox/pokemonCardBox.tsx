import React from 'react';
import useIntersect from '@hooks/useIntersect';
import useSWRInfinite from 'swr/infinite';
import { pokemonFetcher } from '@utils/fetcher';
import PokemonCardGroup from '@components/molecule/card/pokemonCardGroup';

const PAGE_SIZE = 36;

const PokemonCardBox = () => {
  // const { data, mutate, size, setSize, isValidating, isLoading }: any =
  const { data, size, setSize, isLoading }: any = useSWRInfinite(
    (index) =>
      `https://pokeapi.co/api/v2/pokemon?offset=${
        PAGE_SIZE * index
      }&limit=${PAGE_SIZE}`,
    pokemonFetcher,
    {
      dedupingInterval: 60000,
    },
  );

  const ref = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target);
      setSize(size + 1).then(() => {});
    },
    {
      root: null,
      rootMargin: '',
      threshold: 1,
    },
  );

  return (
    <>
      {!isLoading &&
        data.map((innerData: any) =>
          innerData.results.map((pokemon: any, index: any) => (
            <div key={index}>
              {index !== 35 && (
                <div>
                  <PokemonCardGroup pokemon={pokemon}></PokemonCardGroup>
                </div>
              )}
              {index === 35 && (
                <div ref={ref}>
                  <PokemonCardGroup pokemon={pokemon}></PokemonCardGroup>
                </div>
              )}
            </div>
          )),
        )}
    </>
  );
};
export default PokemonCardBox;
