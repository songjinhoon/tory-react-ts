import PokemonLoading from '../../assets/pokemonLoading.gif';
import styled from '@emotion/styled';

const SpinnerBox = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: white;
`;

const ImageBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

/*
const Outter = tw.div`
  fixed top-0 left-0 from-yellow-200 via-transparent to-transparent md:bg-gradient-radial
  w-screen h-screen flex items-center justify-center
   z-50`;
*/

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
