import { faker } from '@faker-js/faker';
import { FC } from 'react';
import PokeBallButton from '@components/molecule/button/pokeBallButton';
import styled from '@emotion/styled';
import PokemonStarButton from '@components/molecule/button/pokemonStarButton';

interface Props {
  id: number;
  src: string;
  name: string;
  isShowPokeBall?: boolean;
  isShowStar?: boolean;
}

const PokemonCard: FC<Props> = ({
  id,
  name,
  src,
  isShowPokeBall = false,
  isShowStar = false,
}) => {
  return (
    <Container>
      <Title>
        <ImgBox src={src} alt={'pokemon'}></ImgBox>
        {isShowPokeBall && <PokeBallButton id={id}></PokeBallButton>}
        {isShowStar && (
          <PokemonStarButton id={id} isYellow={false}></PokemonStarButton>
        )}
      </Title>
      <h4>{name}</h4>
      <b>Attack</b>: {faker.number.int({ max: 1000 })}
      <br />
      <b>Defense</b>: {faker.number.int({ max: 1000 })}
      <br />
      <b>Speed</b>: {faker.number.int({ max: 1000 })}
    </Container>
  );
};

export default PokemonCard;

const Container = styled.div`
  width: 300px;
  height: 300px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgBox = styled.img`
  animation: motion 0.3s linear 0s infinite alternate;
  @keyframes motion {
    0% {
      padding-top: 15px;
    }
    100% {
      padding-bottom: 15px;
    }
  }
`;
