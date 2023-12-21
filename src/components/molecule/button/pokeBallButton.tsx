import { PokeBallContainer } from '@components/molecule/button/styles';
import PokeBall from '@assets/pokeball.png';
import usePokemon from '@hooks/usePokemon';
import useUser, { IUseUserHook } from '@hooks/useUser';
import { useCallback } from 'react';
import useBox from '@hooks/useBox';
import { faker } from '@faker-js/faker';
import { IPokemon } from '@type/pokemon';

const PokeBallButton = ({ id }: { id: number }) => {
  const { user }: IUseUserHook = useUser();
  const { boxMutate, createBox } = useBox();
  const { pokemons, isCatchPokemon } = usePokemon();
  const pokemon = pokemons.find((data: IPokemon) => data.id === id);

  const _onClick = useCallback(() => {
    if (isCatchPokemon()) {
      alert('포켓몬 포획 성공!');
      createBox({
        userId: user.id,
        nickname: user.nickname,
        isPartner: false,
        pokemon: {
          id: id,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          level: faker.number.int({ max: 100 }),
          attack: faker.number.int({ max: 1000 }),
          defense: faker.number.int({ max: 1000 }),
          speed: faker.number.int({ max: 1000 }),
        },
      }).then((r) => boxMutate());
    } else {
      alert('포켓몬 포획 실패!');
    }
  }, [user, createBox, id, isCatchPokemon, pokemon, boxMutate]);

  return (
    <PokeBallContainer>
      <img src={PokeBall} alt={'pokeBall'} width={30} onClick={_onClick} />
    </PokeBallContainer>
  );
};

export default PokeBallButton;
