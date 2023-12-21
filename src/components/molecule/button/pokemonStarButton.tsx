import { CiStar } from 'react-icons/ci';
import { Container } from '@components/molecule/button/styles';
import { useCallback } from 'react';
import useBox from '@hooks/useBox';

const PokemonStarButton = ({
  id,
  isYellow = true,
}: {
  id: number;
  isYellow?: boolean;
}) => {
  const {
    updateBox,
    findByUserIdAndPokemonId,
    isPossibleRegisterPartnerPokemon,
  } = useBox();

  const _onClick = useCallback(() => {
    if (isYellow) {
      const box = findByUserIdAndPokemonId(id);
      updateBox({ ...box, isPartner: false }).then((r) => console.log(r));
    } else {
      if (isPossibleRegisterPartnerPokemon()) {
        const box = findByUserIdAndPokemonId(id);
        updateBox({ ...box, isPartner: true }).then((r) => console.log(r));
      } else {
        alert('파트너 포멧몬은 6마리까지 등록 가능합니다.');
      }
    }
  }, [
    findByUserIdAndPokemonId,
    id,
    updateBox,
    isPossibleRegisterPartnerPokemon,
    isYellow,
  ]);

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
