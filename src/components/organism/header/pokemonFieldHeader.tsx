import styled from '@emotion/styled';
import ToggleThemeButton from '@components/molecule/button/toggleThemeButton';
import RefreshButton from '@components/molecule/refreshButton';

const PokemonFieldHeader = () => {
  return (
    <Container>
      <div
        style={{
          width: '80%',
          height: '100%',
          padding: '0 5%',
          backgroundColor: 'ghostwhite',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ToggleThemeButton></ToggleThemeButton>
        <RefreshButton></RefreshButton>
      </div>
    </Container>
  );
};

export default PokemonFieldHeader;

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
`;
