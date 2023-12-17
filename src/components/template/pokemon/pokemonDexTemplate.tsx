import { lazy, Suspense } from 'react';
import PokemonHeader from '@components/organism/header/pokemonHeader';
import {
  Container,
  Header,
  PokemonFieldContent,
} from '@components/template/styles';
import { useThemeState } from '@context/theme';
import PokemonLoading from '@components/molecule/loading/pokemonLoading';

const PokemonDexTemplate = () => {
  const themeState = useThemeState();
  const PokemonCardBox = lazy(() =>
    Promise.all([
      import('@components/organism/cardBox/pokemonCardBox'),
      new Promise((resolve) => setTimeout(resolve, 1000)),
    ]).then(([moduleExports]) => moduleExports),
  );

  return (
    <Container className={themeState.theme}>
      <Header className={themeState.theme}>
        <PokemonHeader></PokemonHeader>
      </Header>
      <PokemonFieldContent className={themeState.theme}>
        <Suspense fallback={<PokemonLoading />}>
          <PokemonCardBox></PokemonCardBox>
        </Suspense>
      </PokemonFieldContent>
    </Container>
  );
};

export default PokemonDexTemplate;
