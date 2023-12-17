import DashboardHeader from '@components/organism/header/dashboardHeader';
import { useThemeState } from '@context/theme';
import DashboardCardBox from '@components/organism/cardBox/dashboardCardBox';
import { Container, Content, Header } from "@components/template/styles";

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
