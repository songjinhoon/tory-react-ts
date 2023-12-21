import { CiStar } from 'react-icons/ci';
import { Container } from '@components/molecule/button/styles';
import { useCallback } from 'react';
import useBox from '@hooks/useBox';
import useUser, { IUseUserHook } from '@hooks/useUser';

const PokemonStarButton = ({
  id,
  isYellow = true,
}: {
  id: number;
  isYellow?: boolean;
}) => {
  const { user }: IUseUserHook = useUser();
  const { updateBox, findBoxByUserIdAndPokemonId } = useBox();

  const _onClick = useCallback(() => {
    const box = findBoxByUserIdAndPokemonId(user.id, id);
    updateBox(box.id, { ...box, isPartner: true }).then((r) => console.log(r));
  }, [findBoxByUserIdAndPokemonId, id, updateBox, user]);

  return (
    <Container onClick={_onClick}>
      <CiStar
        size={30}
        style={isYellow ? { backgroundColor: 'yellow' } : {}}
      ></CiStar>
    </Container>
  );
};

export default PokemonStarButton;
