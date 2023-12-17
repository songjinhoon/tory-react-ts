import ToggleThemeButton from '@components/molecule/button/toggleThemeButton';
import LogoutButton from '@components/molecule/button/logoutButton';
import {
  Container,
  EventIconContainer,
  NavContainer,
} from '@components/organism/header/styles';
import DashboardButton from '@components/molecule/button/dashboardButtom';
import useMove from '@hooks/useMove';

const PokemonHeader = () => {
  const { movePokemonField, movePokemonDex } = useMove();
  return (
    <Container>
      <h2>POKEMON PROJECT</h2>
      <NavContainer>
        <h4 onClick={movePokemonField}>Field</h4>
        <h4 onClick={movePokemonDex}>Dex</h4>
      </NavContainer>
      <EventIconContainer>
        <DashboardButton></DashboardButton>
        <ToggleThemeButton></ToggleThemeButton>
        <LogoutButton></LogoutButton>
      </EventIconContainer>
    </Container>
  );
};

export default PokemonHeader;
