import React from 'react';
import useIntersect from '@hooks/useIntersect';
import PokemonCardGroup from '@components/molecule/pokemonCardGroup';
import useSWRInfinite from 'swr/infinite';
import { pokemonFetcher } from '@utils/fetcher';
import { IPokemon } from '@type/pokemon';

const PAGE_SIZE = 36;

const PokemonCard = () => {
  // const { data, mutate, size, setSize, isValidating, isLoading }: any =
  const { data, size, setSize } = useSWRInfinite(
    (index) =>
      `https://pokeapi.co/api/v2/pokemon?offset=${
        PAGE_SIZE * index
      }&limit=${PAGE_SIZE}`,
    pokemonFetcher,
    {
      dedupingInterval: 60000,
    },
  );
  const groups = data ? parsing(data) : [];
  /*const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;*/

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
      {groups.length !== 0 && (
        <>
          {groups.map((group: IPokemon[], index: number) => (
            <div key={index}>
              {index !== groups.length - 6 && (
                <div>
                  <PokemonCardGroup pokemons={group}></PokemonCardGroup>
                </div>
              )}
              {index === groups.length - 6 && (
                <div ref={ref}>
                  <PokemonCardGroup pokemons={group}></PokemonCardGroup>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default PokemonCard;

function parsing(params: any): IPokemon[][] {
  const array: IPokemon[][] = [];
  params.forEach((param: any) => {
    for (let i = 0; i < param.results.length; i += 3) {
      array.push(param.results.slice(i, i + 3));
    }
  });
  return array;
}
