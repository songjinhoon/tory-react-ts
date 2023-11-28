import React, { FC, useEffect, useState } from 'react';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import useIntersect from '@hooks/useIntersect';
import PokemonCardGroup from '@components/organism/card/pokemonCardGroup';

const size = 18;

const PokemonCard: FC<any> = () => {
  const [limit, setLimit] = useState(18);
  const [position, setPosition] = useState<any>();
  const { data, mutate, isLoading } = useSWR<any>(
    `/api/v2/pokemon?offset=0&limit=${limit}`,
    fetcher,
    {
      dedupingInterval: 60000,
    },
  );
  const [groups, setGroups] = useState<any>([]);

  const ref = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target);
      setLimit(limit + size);
      setPosition(window.scrollY);
    },
    {
      root: null,
      rootMargin: '',
      threshold: 1,
    },
  );

  useEffect(() => {
    if (!isLoading) {
      const array = [];
      for (let i = 0; i < data.results.length; i += 3) {
        array.push(data.results.slice(i, i + 3));
      }
      setGroups(array);
    }
  }, [isLoading]);

  window.scrollTo({
    top: position,
  });

  return (
    <>
      {!isLoading && groups.length !== 0 && (
        <>
          {groups.map((group: any, index: number) => (
            <div key={index}>
              {index !== groups.length - 1 && (
                <div>
                  <PokemonCardGroup datas={group}></PokemonCardGroup>
                </div>
              )}
              {index === groups.length - 1 && (
                <div ref={ref}>
                  <PokemonCardGroup datas={group}></PokemonCardGroup>
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
