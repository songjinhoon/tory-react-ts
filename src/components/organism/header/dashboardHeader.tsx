import styled from '@emotion/styled';
import LogoutButton from '@components/molecule/button/logoutButton';
import ToggleThemeButton from '@components/molecule/button/toggleThemeButton';
import { useThemeState } from '@context/theme';

const DashboardHeader = () => {
  const themeState = useThemeState();

  return (
    <>
      <h2>DEMO PROJECT</h2>
      <EventIconContainer>
        <ToggleThemeButton></ToggleThemeButton>
        <LogoutButton></LogoutButton>
      </EventIconContainer>
    </>
  );
};

export default DashboardHeader;

const EventIconContainer = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
