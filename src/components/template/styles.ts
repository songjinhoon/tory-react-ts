import styled from '@emotion/styled';

export const Container = styled.div``;

export const Header = styled.header`
  &.light {
    background-color: whitesmoke;
  }

  &.dark {
    background-color: black;
  }
`;

export const Content = styled.section`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonFieldContent = styled.section`
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &.light {
    background: url(/pokemonLightBg.png) no-repeat center;
  }

  &.dark {
    background: url(/pokemonDarkBg.png) no-repeat center;
  }
`;
