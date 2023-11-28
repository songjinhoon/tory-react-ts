import React, { FC, useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import useIntersect from '@hooks/useIntersect';
import PokemonCardGroup from '@components/organism/card/pokemonCardGroup';
import PokemonLoading from '../../../assets/pokemonLoading.gif';

const size = 18;

const PokemonCard: FC<any> = () => {
  const check = useRef<any>();
  const [renderLoading, setRenderLoading] = useState(false);
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

  useEffect(() => {
    if (position) {
      setRenderLoading(true);
      setTimeout(() => {
        setRenderLoading(false);
      }, 1000);
    }
  }, [position]);

  setTimeout(() => {
    if (check.current) {
      console.log('이')
      check.current.scrollIntoView({});
    }
  }, 1000);

  return (
    <>
      {renderLoading && (
        <div
          style={{
            height: '100vh',
            background: 'white',
            zIndex: 10,
            overflowY: 'hidden',
          }}
        >
          <img
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            src={PokemonLoading}
            alt={'loading'}
          />
        </div>
      )}
      {!isLoading && groups.length !== 0 && (
        <div style={renderLoading ? { display: 'none' } : {}}>
          {groups.map((group: any, index: number) => (
            <div key={index}>
              {index !== groups.length - 1 && index !== groups.length - 6 && (
                <div>
                  <PokemonCardGroup datas={group}></PokemonCardGroup>
                </div>
              )}
              {index === groups.length - 6 && limit != 18 && (
                <div ref={check}>ㅇㅇㅇㅇㅇㅇㅇ</div>
              )}
              {index === groups.length - 1 && (
                <div ref={ref}>
                  <PokemonCardGroup datas={group}></PokemonCardGroup>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PokemonCard;
