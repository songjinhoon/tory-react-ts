import DashboardHeader from '@components/organism/header/dashboardHeader';
import { useThemeState } from '@context/theme';
import styled from '@emotion/styled';
import DashboardCardBox from '@components/organism/cardBox/dashboardCardBox';

const DashboardTemplate = () => {
  const themeState = useThemeState();

  return (
    <Container className={themeState.theme}>
      <Header className={themeState.theme}>
        <DashboardHeader></DashboardHeader>
      </Header>
      <Content>
        <DashboardCardBox></DashboardCardBox>
      </Content>
    </Container>
  );
};

export default DashboardTemplate;

const Container = styled.div``;

const Header = styled.header`
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

const Content = styled.section`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
