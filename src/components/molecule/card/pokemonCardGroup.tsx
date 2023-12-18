import styled from '@emotion/styled';
import { faker } from '@faker-js/faker';

const PokemonCardGroup = ({ pokemon }: { pokemon: any }) => {
  return (
    <div style={{ width: '300px', height: '500px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ImgBox
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url
            .substring(pokemon.url.lastIndexOf('/pokemon/') + 9)
            .replace('/', '')}.png`}
          alt={'pokemon'}
        ></ImgBox>
      </div>
      <h4>{pokemon.name}</h4>
      <b>Attack</b>: {faker.number.int({ max: 1000 })}
      <br />
      <b>Defense</b>: {faker.number.int({ max: 1000 })}
      <br />
      <b>Speed</b>: {faker.number.int({ max: 1000 })}
    </div>
  );
};

export default PokemonCardGroup;

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
