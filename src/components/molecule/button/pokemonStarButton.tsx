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
  const {
    updateBox,
    findBoxByUserIdAndPokemonId,
    isPossibleRegisterPartnerPokemon,
  } = useBox();

  const _onClick = useCallback(() => {
    if (isYellow) {
      const box = findBoxByUserIdAndPokemonId(user.id, id);
      updateBox(box.id, { ...box, isPartner: false }).then((r) =>
        console.log(r),
      );
    } else {
      if (isPossibleRegisterPartnerPokemon(user.id)) {
        const box = findBoxByUserIdAndPokemonId(user.id, id);
        updateBox(box.id, { ...box, isPartner: true }).then((r) =>
          console.log(r),
        );
      } else {
        alert('파트너 포멧몬은 6마리까지 등록 가능합니다.');
      }
    }
  }, [findBoxByUserIdAndPokemonId, id, updateBox, user, isPossibleRegisterPartnerPokemon, isYellow]);

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
