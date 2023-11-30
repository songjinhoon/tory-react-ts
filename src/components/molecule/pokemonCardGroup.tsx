import { Card, CardGroup } from 'react-bootstrap';
import { IPokemon } from '@type/pokemon';
import styled from '@emotion/styled';

const PokemonCardGroup = ({ pokemons }: { pokemons: IPokemon[] }) => {
  return (
    <CardGroup style={{ height: '400px' }}>
      {pokemons.map((pokemon: IPokemon, index: number) => (
        <Item key={index + 1} pokemon={pokemon} />
      ))}
    </CardGroup>
  );
};

export default PokemonCardGroup;

const Item = ({ pokemon }: { pokemon: IPokemon }) => {
  return (
    <>
      <Card>
        <div style={{ height: 100 }}>
          <ImgBox
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url
              .substring(pokemon.url.lastIndexOf('/pokemon/') + 9)
              .replace('/', '')}.png`}
          ></ImgBox>
        </div>
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text>Introduce...</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </>
  );
};

const ImgBox = styled.img`
  animation: motion 0.3s linear 0s infinite alternate;
  @keyframes motion {
    0% {
      padding-top: 0;
    }
    100% {
      padding-top: 10px;
    }
  }
`;
