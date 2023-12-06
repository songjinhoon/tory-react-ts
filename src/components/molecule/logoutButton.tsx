import styled from '@emotion/styled';
import useUser from '@hooks/useUser';

const Button = styled.button`
  border: none;
  width: 100%;
  background: transparent;
  display: block;
  height: 33px;
  padding: 5px 20px 5px;
  outline: none;
  cursor: pointer;
`;

const LogoutButton = () => {
  const { logout } = useUser();

  return <Button onClick={logout}>logout</Button>;
};

export default LogoutButton;
