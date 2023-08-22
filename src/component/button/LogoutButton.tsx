import styled from '@emotion/styled';
import useUser from '@hook/useUser';

const Button = styled.button`
  border: none;
  width: 100%;
  border-top: 1px solid rgb(29, 28, 29);
  background: transparent;
  display: block;
  height: 33px;
  padding: 5px 20px 5px;
  outline: none;
  cursor: pointer;
`;

const LogoutButton = () => {
  const { logout } = useUser();

  return <Button onClick={logout}>로그아웃</Button>;
};

export default LogoutButton;
