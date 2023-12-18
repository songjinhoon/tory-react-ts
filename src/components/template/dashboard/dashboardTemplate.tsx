import DashboardHeader from '@components/organism/header/dashboardHeader';
import { useThemeState } from '@context/theme';
import DashboardCardView from '@components/organism/card/dashboardCardView';
import { Container, Content, Header } from "@components/template/styles";

const DashboardTemplate = () => {
  const themeState = useThemeState();

  return (
    <Container className={themeState.theme}>
      <Header className={themeState.theme}>
        <DashboardHeader></DashboardHeader>
      </Header>
      <Content>
        <DashboardCardView></DashboardCardView>
      </Content>
    </Container>
  );
};

export default DashboardTemplate;
