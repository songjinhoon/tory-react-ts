import { IPokemon } from '@type/pokemon';
import styled from '@emotion/styled';

const PokemonCardGroup = ({ pokemons }: { pokemons: IPokemon[] }) => {
  return (
    /*<CardGroup style={{ height: '400px' }}>
      {pokemons.map((pokemon: IPokemon, index: number) => (
        <Item key={index + 1} pokemon={pokemon} />
      ))}
    </CardGroup>*/
    <p>응</p>
  );
};

export default PokemonCardGroup;

const Item = ({ pokemon }: { pokemon: IPokemon }) => {
  return (
    <p>응</p>
    /*    <>
          <Card style={{ padding: '30px' }}>
            <div style={{ height: 120 }}>
              <ImgBox
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url
                  .substring(pokemon.url.lastIndexOf('/pokemon/') + 9)
                  .replace('/', '')}.png`}
              ></ImgBox>
            </div>
            <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
              <div style={{ height: '20px' }}></div>
              <Card.Text>
                <b>Attack</b>: {faker.number.float()}
                <br />
                <b>Defense</b>: {faker.number.float()}
                <br />
                <b>Speed</b>: {faker.number.float()}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>*/
  );
};
