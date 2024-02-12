import { Container, EventIconContainer } from '@components/organism/styles';
import { useLocation } from 'react-router-dom';
import ToggleThemeButton from '@components/molecule/button/toggleThemeButton';
import ProfileButton from '@components/molecule/button/profileButton';
import LogoutButton from '@components/molecule/button/logoutButton';

const CommonHeader = () => {
  const location = useLocation();

  return (
    <Container>
      <h2>{location.pathname.replace('/', '').toUpperCase()}</h2>
      <EventIconContainer>
        <ToggleThemeButton></ToggleThemeButton>
        <ProfileButton></ProfileButton>
        <LogoutButton></LogoutButton>
      </EventIconContainer>
    </Container>
  );
};

export default CommonHeader;
