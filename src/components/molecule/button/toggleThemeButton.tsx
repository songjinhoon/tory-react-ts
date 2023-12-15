import { CiDark, CiLight } from 'react-icons/ci';
import { useState } from 'react';
import styled from '@emotion/styled';
import { useThemeDispatch, useThemeState } from '@context/theme';

const ToggleThemeButton = () => {
  const themeState = useThemeState();
  const themeDispatch = useThemeDispatch();
  const [isToggled, setToggled] = useState(themeState.theme !== 'light');

  const handleToggle = () => {
    setToggled(!isToggled);
    themeDispatch({
      type: 'updateTheme',
      key: 'theme',
      value: isToggled ? 'light' : 'dark',
    });
  };

  return (
    <Container onClick={handleToggle}>
      {themeState.theme === 'light' && <CiDark size={30}></CiDark>}
      {themeState.theme !== 'light' && <CiLight size={30}></CiLight>}
    </Container>
  );
};

export default ToggleThemeButton;

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
