import { faker } from '@faker-js/faker';
import styled from '@emotion/styled';
import PokeBallButton from '@components/molecule/button/pokeBallButton';
import usePokemon from '@hooks/usePokemon';
import { IPokemon } from '@type/pokemon';
import useUser from '@hooks/useUser';

const PokemonCatchCard = ({ id }: { id: number }) => {
  const { user }: any = useUser();
  const { findById } = usePokemon();
  const data: IPokemon = findById(id);
  const isDisableButton =
    user && user.pokemons.filter((data: number) => data === id).length !== 0;

  return (
    <>
      {data && (
        <div style={{ width: '300px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ImgBox
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt={'pokemon'}
            ></ImgBox>
            {!isDisableButton && <PokeBallButton id={id}></PokeBallButton>}
          </div>
          <h4>{data.name}</h4>
          <b>Attack</b>: {faker.number.int({ max: 1000 })}
          <br />
          <b>Defense</b>: {faker.number.int({ max: 1000 })}
          <br />
          <b>Speed</b>: {faker.number.int({ max: 1000 })}
        </div>
      )}
    </>
  );
};

export default PokemonCatchCard;

const ImgBox = styled.img`
  margin-left: 30px;
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
