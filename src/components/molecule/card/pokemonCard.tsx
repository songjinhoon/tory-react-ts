import usePokemon from '@hooks/usePokemon';
import { faker } from '@faker-js/faker';
import styled from '@emotion/styled';

const PokemonCard = ({ id }: { id: number }) => {
  const { useGetPokemonQuery } = usePokemon();
  const pokemon = useGetPokemonQuery(id);

  return (
    <>
      {pokemon && (
        <Container>
          <Image>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt={'pokemon'}
            />
          </Image>
          <Stat>
            <h4>{pokemon.name}</h4>
            <p>Level: {faker.number.int({ max: 100 })}</p>
          </Stat>
        </Container>
      )}
    </>
  );
};

export default PokemonCard;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 5rem;
  background-color: #dadada;
  margin-bottom: 1rem;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
`;

const Stat = styled.div``;