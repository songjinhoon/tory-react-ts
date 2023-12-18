import { useThemeState } from '@context/theme';
import PokemonHeader from '@components/organism/header/pokemonHeader';
import {
  Container,
  Header,
  PokemonContent,
  PokemonContentDiv,
} from '@components/template/styles';
import React from 'react';
import PokemonCatchCardBox from '@components/organism/cardBox/pokemonCatchCardBox';

const PokemonFieldTemplate = () => {
  const themeState = useThemeState();

  return (
    <Container className={themeState.theme}>
      <Header className={themeState.theme}>
        <PokemonHeader></PokemonHeader>
      </Header>
      <PokemonContent className={themeState.theme}>
        <PokemonContentDiv>
          <PokemonCatchCardBox></PokemonCatchCardBox>
        </PokemonContentDiv>
      </PokemonContent>
    </Container>
  );
};

export default PokemonFieldTemplate;
