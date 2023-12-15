import useUser from '@hooks/useUser';
import { CiLogout } from 'react-icons/ci';
import styled from '@emotion/styled';

const LogoutButton = () => {
  const { logout } = useUser();

  return (
    <Container>
      <CiLogout size={30} onClick={logout}></CiLogout>
    </Container>
  );
};

export default LogoutButton;

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(94, 92, 92, 0.5);
  }
`;
