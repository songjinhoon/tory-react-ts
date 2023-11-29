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
    <div style={{ overflowAnchor: 'none' }}>
      <PokemonHeader></PokemonHeader>
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonCard></PokemonCard>
      </Suspense>
    </div>
  );
};

export default PokemonDexTemplate;
