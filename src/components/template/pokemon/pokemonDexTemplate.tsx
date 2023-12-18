import { lazy, Suspense } from 'react';
import PokemonHeader from '@components/organism/header/pokemonHeader';
import {
  Container,
  Header,
  PokemonContent,
  PokemonContentDiv,
} from '@components/template/styles';
import { useThemeState } from '@context/theme';
import PokemonLoading from '@components/molecule/loading/pokemonLoading';

const PokemonDexTemplate = () => {
  const themeState = useThemeState();
  const PokemonCardBox = lazy(() =>
    Promise.all([
      import('@components/organism/pokemon/pokemonDex'),
      new Promise((resolve) => setTimeout(resolve, 1000)),
    ]).then(([moduleExports]) => moduleExports),
  );

  return (
    <Container className={themeState.theme}>
      <Header className={themeState.theme}>
        <PokemonHeader></PokemonHeader>
      </Header>
      <PokemonContent className={themeState.theme}>
        <Suspense fallback={<PokemonLoading />}>
          <PokemonContentDiv>
            <PokemonCardBox></PokemonCardBox>
          </PokemonContentDiv>
        </Suspense>
      </PokemonContent>
    </Container>
  );
};

export default PokemonDexTemplate;
