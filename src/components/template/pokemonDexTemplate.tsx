import { lazy, Suspense } from 'react';
import PokemonWitheBg from '../../assets/pokemonWhiteBg.png';
import PokemonHeader from '@components/organism/header/pokemonHeader';
import PokemonLoading from '@components/molecule/pokemonLoading';
import styled from '@emotion/styled';

const PokemonDexTemplate = () => {
  const PokemonCard = lazy(
    () =>
      Promise.all([
        import('@components/organism/card/pokemonCard'),
        new Promise((resolve) => setTimeout(resolve, 1000)),
      ]).then(([moduleExports]) => moduleExports),
  );

  return (
    <>
      <PokemonHeader></PokemonHeader>
      <Suspense fallback={<PokemonLoading />}>
        <PokemonCardBLock style={{ background: `url(${PokemonWitheBg})` }}>
          <PokemonCard></PokemonCard>
        </PokemonCardBLock>
      </Suspense>
    </>
  );
};

export default PokemonDexTemplate;

const PokemonCardBLock = styled.div`
  margin-top: 86px;
`;
