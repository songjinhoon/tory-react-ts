import LogoutButton from '@components/molecule/button/logoutButton';
import ToggleThemeButton from '@components/molecule/button/toggleThemeButton';
import {
  Container,
  EventIconContainer,
} from '@components/organism/styles';
import ProfileButton from '@components/molecule/button/profileButton';

const DashboardHeader = () => {
  return (
    <Container>
      <h2>DEMO PROJECT</h2>
      <EventIconContainer>
        <ToggleThemeButton></ToggleThemeButton>
        <ProfileButton></ProfileButton>
        <LogoutButton></LogoutButton>
      </EventIconContainer>
    </Container>
  );
};

export default DashboardHeader;
