import LogoutButton from '@components/molecule/button/logoutButton';
import ToggleThemeButton from '@components/molecule/button/toggleThemeButton';
import {
  Container,
  EventIconContainer,
} from '@components/organism/header/styles';

const DashboardHeader = () => {
  return (
    <Container>
      <h2>DEMO PROJECT</h2>
      <EventIconContainer>
        <ToggleThemeButton></ToggleThemeButton>
        <LogoutButton></LogoutButton>
      </EventIconContainer>
    </Container>
  );
};

export default DashboardHeader;
