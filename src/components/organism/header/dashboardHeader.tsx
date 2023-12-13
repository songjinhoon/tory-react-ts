import styled from '@emotion/styled';
import LogoutButton from '@components/molecule/logoutButton';
import ToggleThemeButton from '@components/molecule/toggleThemeButton';

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

const Container = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  background: lightcyan;
`;

const EventIconContainer = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
