import { useThemeState } from '@context/theme';
import {
  Container,
  Header,
  PokemonContent,
  PokemonContentDiv,
} from '@components/template/styles';
import PokemonHeader from '@components/organism/header/pokemonHeader';
import PokemonBox from '@components/organism/pokemon/pokemonBox';

const PokemonBoxTemplate = () => {
  const themeState = useThemeState();

  return (
    <Container className={themeState.theme}>
      <Header className={themeState.theme}>
        <PokemonHeader></PokemonHeader>
      </Header>
      <PokemonContent className={themeState.theme}>
        <PokemonContentDiv>
          <PokemonBox></PokemonBox>
        </PokemonContentDiv>
      </PokemonContent>
    </Container>
  );
};

export default PokemonBoxTemplate;
