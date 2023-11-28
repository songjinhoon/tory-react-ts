import PokemonHeader from '@components/organism/header/pokemonHeader';
import { lazy, Suspense } from 'react';

const PokemonDexTemplate = () => {
  const PokemonCard = lazy(() =>
    Promise.all([
      import('@components/organism/card/pokemonCard'),
      new Promise((resolve) => setTimeout(resolve, 1000)),
    ]).then(([moduleExports]) => moduleExports),
  );

  return (
    <>
      <PokemonHeader></PokemonHeader>
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonCard></PokemonCard>
      </Suspense>
    </>
  );
};

export default PokemonDexTemplate;
