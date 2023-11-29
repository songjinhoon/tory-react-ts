import PokemonLoading from '../../assets/pokemonLoading.gif';
import styled from '@emotion/styled';

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

const Spinner = () => {
  return (
    <SpinnerBox>
      <ImageBox>
        <img src={PokemonLoading} alt="" />
      </ImageBox>
    </SpinnerBox>
  );
};

export default Spinner;
