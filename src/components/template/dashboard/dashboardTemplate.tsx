import CommonHeader from '@components/organism/common/commonHeader';
import { useThemeState } from '@context/theme';
import Dashboard from '@components/organism/dashboard/dashboard';
import { Container, Content, Header } from "@components/template/styles";

const DashboardTemplate = () => {
  const themeState = useThemeState();

  return (
    <Container className={themeState.theme}>
      <Header className={themeState.theme}>
        <CommonHeader></CommonHeader>
      </Header>
      <Content>
        <Dashboard></Dashboard>
      </Content>
    </Container>
  );
};

export default DashboardTemplate;
