import PokemonCard from '@components/molecule/card/pokemonCard';
import useBox from '@hooks/useBox';
import { IBox } from '@type/box';
import styled from '@emotion/styled';
import PokemonImageCard from '@components/molecule/card/pokemonImageCard';
import useUser, { IUseUserHook } from '@hooks/useUser';

const PokemonBox = () => {
  const { user }: IUseUserHook = useUser();
  const { findByUserIdAndIsPartner, findByUserIdAndNotIsPartner } = useBox();

  return (
    <Container>
      <PartnerContainer>
        {user &&
          findByUserIdAndIsPartner().map((box: IBox, index: number) => (
            <PokemonImageCard
              key={index}
              id={box.pokemon.id}
              src={box.pokemon.image}
              name={box.pokemon.name}
            ></PokemonImageCard>
          ))}
      </PartnerContainer>
      <NoPartnerContainer>
        {user &&
          findByUserIdAndNotIsPartner().map((box: IBox, index: number) => (
            <PokemonCard
              key={index}
              id={box.pokemon.id}
              src={box.pokemon.image}
              name={box.pokemon.name}
              isShowStar={true}
            ></PokemonCard>
          ))}
      </NoPartnerContainer>
    </Container>
  );
};

export default PokemonBox;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PartnerContainer = styled.div`
  height: 20%;
  background-color: #b9b9b9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoPartnerContainer = styled.div`
  min-width: 1100px;
  height: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
