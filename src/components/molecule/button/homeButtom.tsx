import { CiHome } from 'react-icons/ci';
import { Container } from '@components/molecule/button/styles';
import useMove from '@hooks/useMove';

const DashboardButton = () => {
  const { moveDashboard } = useMove();
  return (
    <Container>
      <CiHome size={30} onClick={moveDashboard}></CiHome>
    </Container>
  );
};

export default DashboardButton;
