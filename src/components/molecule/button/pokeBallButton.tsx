import { PokeBallContainer } from '@components/molecule/button/styles';
import PokeBall from '@assets/pokeball.png';
import usePokemon from '@hooks/usePokemon';
import useUser, { IUseUserHook } from '@hooks/useUser';
import { useCallback } from 'react';

const PokeBallButton = ({ id }: { id: number }) => {
  const { isCatchPokemon } = usePokemon();
  const { user, updateUser }: IUseUserHook = useUser();

  const _onClick = useCallback(() => {
    if (isCatchPokemon()) {
      alert('포켓몬 포획 성공!');
      updateUser({ ...user, pokemons: user.pokemons.concat(id) });
    } else {
      alert('포켓몬 포획 실패!');
    }
  }, [user]);
  return (
    <PokeBallContainer>
      <img src={PokeBall} alt={'pokeBall'} width={30} onClick={_onClick} />
    </PokeBallContainer>
  );
};

export default PokeBallButton;
