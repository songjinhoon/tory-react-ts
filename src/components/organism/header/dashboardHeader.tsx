import styled from '@emotion/styled';
import LogoutButton from '@components/molecule/button/logoutButton';
import ToggleThemeButton from '@components/molecule/button/toggleThemeButton';
import { useThemeState } from '@context/theme';

const DashboardHeader = () => {
  const themeState = useThemeState();

  return (
    <Container className={themeState.theme}>
      <h2>DEMO PROJECT</h2>
      <EventIconContainer>
        <ToggleThemeButton></ToggleThemeButton>
        <LogoutButton></LogoutButton>
      </EventIconContainer>
    </Container>
  );
};

export default DashboardHeader;

const Container = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;

  &.light {
    background-color: whitesmoke;
  }

  &.dark {
    background-color: black;
  }
`;

const EventIconContainer = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
