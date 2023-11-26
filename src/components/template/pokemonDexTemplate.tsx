import PokemonHeader from '@components/organism/header/pokemonHeader';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import PokemonCard from '@components/organism/pokemonCard';
import { Card, CardGroup } from 'react-bootstrap';

const PokemonDexTemplate = () => {
  const { data, mutate, isLoading } = useSWR<any>(
    '/api/v2/pokemon?offset=0&limit=3',
    fetcher,
    {
      dedupingInterval: 60000,
    },
  );

  return (
    <>
      <PokemonHeader></PokemonHeader>
      <CardGroup>
        {!isLoading &&
          data.results.map((data: any, index: number) => (
            <PokemonCard key={index} name={data.name} />
          ))}
      </CardGroup>
      <div>pokemon dex template</div>
    </>
  );
};

export default PokemonDexTemplate;
