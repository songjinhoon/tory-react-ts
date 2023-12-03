import DarkModeIcon from '../../../assets/darkmodeIcon.png';
import WhiteModeIcon from '../../../assets/sunIcon.png';
import { useState } from 'react';
import styled from '@emotion/styled';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  background-color: ghostwhite;
  color: #ffffff;
  border-radius: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: gray;
  }
`;

const ToggleThemeButton = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <ButtonContainer onClick={handleToggle}>
      <img src={isToggled ? WhiteModeIcon : DarkModeIcon} alt="Toggle Button" width={30} />
    </ButtonContainer>
  );
};

export default ToggleThemeButton;
