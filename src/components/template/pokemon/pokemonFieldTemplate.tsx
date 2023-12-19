import { useThemeState } from '@context/theme';
import PokemonHeader from '@components/organism/pokemon/common/pokemonHeader';
import {
  Container,
  Header,
  PokemonContent,
  PokemonContentDiv,
} from '@components/template/styles';
import React from 'react';
import PokemonField from '@components/organism/pokemon/pokemonField';

const PokemonFieldTemplate = () => {
  const themeState = useThemeState();

  return (
    <Container className={themeState.theme}>
      <Header className={themeState.theme}>
        <PokemonHeader></PokemonHeader>
      </Header>
      <PokemonContent className={themeState.theme}>
        <PokemonContentDiv>
          <PokemonField></PokemonField>
        </PokemonContentDiv>
      </PokemonContent>
    </Container>
  );
};

export default PokemonFieldTemplate;
