import styled from '@emotion/styled';
import pikachu from '../../assets/pokemonLoading.gif';

const SpinnerBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 9;
`;

const ImageBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const PokemonLoading = () => {
  return (
    <SpinnerBox>
      <ImageBox>
        <img src={pikachu} alt="" />
      </ImageBox>
    </SpinnerBox>
  );
};

export default PokemonLoading;
