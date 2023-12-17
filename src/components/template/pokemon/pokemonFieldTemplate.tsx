import { useThemeState } from '@context/theme';
import PokemonHeader from '@components/organism/header/pokemonHeader';
import {
  Container,
  Header,
  PokemonFieldContent,
} from '@components/template/styles';
import PokemonCatchCardBox from '@components/organism/cardBox/pokemonCatchCardBox';

const PokemonFieldTemplate = () => {
  const themeState = useThemeState();

  return (
    <Container className={themeState.theme}>
      <Header className={themeState.theme}>
        <PokemonHeader></PokemonHeader>
      </Header>
      <PokemonFieldContent className={themeState.theme}>
        <PokemonCatchCardBox></PokemonCatchCardBox>
      </PokemonFieldContent>
    </Container>
  );
};

export default PokemonFieldTemplate;
