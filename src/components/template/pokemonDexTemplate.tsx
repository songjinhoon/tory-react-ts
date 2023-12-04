import { Suspense } from 'react';
import PokemonWitheBg from '../../assets/pokemonWhiteBg.png';
import PokemonHeader from '@components/organism/header/pokemonHeader';
import PokemonLoading from '@components/molecule/loading/pokemonLoading';
import styled from '@emotion/styled';
import PokemonDexGrid from '@components/organism/gridBox/pokemonDexGrid';

const PokemonDexTemplate = () => {
  /*  const PokemonCard = lazy(() =>
    Promise.all([
      import('@components/organism/cardBox/pokemonCardBox'),
      new Promise((resolve) => setTimeout(resolve, 1000)),
    ]).then(([moduleExports]) => moduleExports),
  );*/

  return (
    <>
      <PokemonHeader></PokemonHeader>
      <Suspense fallback={<PokemonLoading />}>
        <PokemonCardBLock style={{ background: `url(${PokemonWitheBg})` }}>
          {/*<PokemonCard></PokemonCard>*/}
          <PokemonDexGrid></PokemonDexGrid>
        </PokemonCardBLock>
      </Suspense>
    </>
  );
};

export default PokemonDexTemplate;

const PokemonCardBLock = styled.div`
  margin-top: 86px;
`;
