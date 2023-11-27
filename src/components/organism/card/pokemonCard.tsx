import React, { FC, useEffect, useState } from 'react';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import PokemonCardGroup from './pokemonCardGroup';
import useIntersect from '@hooks/useIntersect';

const PokemonCard: FC<any> = () => {
  const [limit, setLimit] = useState(18);
  const [isComplete, setIsComplete] = useState(false);
  const { data, mutate, isLoading } = useSWR<any>(
    `/api/v2/pokemon?offset=0&limit=${limit}`,
    fetcher,
    {
      dedupingInterval: 60000,
    },
  );
  const [groups, setGroups] = useState<any>([]);

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    console.log('음');
    // setLimit(36);
  });

  useEffect(() => {
    if (!isLoading) {
      const array = [];
      for (let i = 0; i < data.results.length; i += 3) {
        array.push(data.results.slice(i, i + 3));
      }
      setGroups(array);
    }
  }, [isLoading]);

  return (
    <>
      {!isLoading &&
        groups.length !== 0 &&
        groups.map((group: any, index: number) => (
          <PokemonCardGroup
            key={index}
            datas={group}
            index={index}
            setIsComplete={setIsComplete}
          ></PokemonCardGroup>
        ))}
      {isComplete && <div ref={ref}>pokemon dex template</div>}
    </>
  );
};

export default PokemonCard;
