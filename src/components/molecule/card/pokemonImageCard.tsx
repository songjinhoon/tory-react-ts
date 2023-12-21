import styled from '@emotion/styled';
import PokemonStarButton from '@components/molecule/button/pokemonStarButton';

interface Props {
  id: number;
  name: string;
  src: string;
}

const PokemonImageCard = ({ id, name, src }: Props) => {
  return (
    <Container>
      <Title>
        <img src={src} alt={'pokemonImage'} />
        <PokemonStarButton id={id}></PokemonStarButton>
      </Title>
      <h4>{name}</h4>
    </Container>
  );
};

export default PokemonImageCard;

const Container = styled.div`
  width: 150px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;
