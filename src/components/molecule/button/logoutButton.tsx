import useUser from '@hooks/useUser';
import { CiLogout } from 'react-icons/ci';
import { Container } from '@components/molecule/button/styles';

const LogoutButton = () => {
  const { logout } = useUser();

  return (
    <Container>
      <CiLogout size={30} onClick={logout}></CiLogout>
    </Container>
  );
};

export default LogoutButton;
