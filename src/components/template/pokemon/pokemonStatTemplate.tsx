import { useThemeState } from '@context/theme';
import {
  Container,
  Header,
  PokemonContent,
  PokemonContentDiv,
} from '@components/template/styles';
import PokemonHeader from '@components/organism/pokemon/common/pokemonHeader';
import React from 'react';
import PokemonStat from '@components/organism/pokemon/pokemonStat';

const PokemonStatTemplate = () => {
  const themeState = useThemeState();

  return (
    <Container className={themeState.theme}>
      <Header className={themeState.theme}>
        <PokemonHeader></PokemonHeader>
      </Header>
      <PokemonContent className={themeState.theme}>
        <PokemonContentDiv>
          <PokemonStat></PokemonStat>
        </PokemonContentDiv>
      </PokemonContent>
    </Container>
  );
};

export default PokemonStatTemplate;
