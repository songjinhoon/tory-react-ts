import ToggleThemeButton from '@components/molecule/button/toggleThemeButton';
import LogoutButton from '@components/molecule/button/logoutButton';
import {
  Container,
  EventIconContainer,
  NavContainer,
} from '@components/organism/styles';
import DashboardButton from '@components/molecule/button/homeButtom';
import useMove from '@hooks/useMove';
import ProfileButton from '@components/molecule/button/profileButton';
import { useCallback } from 'react';
import useUser, { IUseUserHook } from '@hooks/useUser';
import { faker } from '@faker-js/faker';

const PokemonHeader = () => {
  const { user, updateUser }: IUseUserHook = useUser();
  const { movePokemonField, movePokemonDex, movePokemonBox } = useMove();
  const test = useCallback(() => {
    updateUser({ ...user, nickname: faker.name.fullName() });
  }, [user, updateUser]);

  return (
    <Container>
      <h2>POKEMON PROJECT</h2>
      <NavContainer>
        <h4 onClick={movePokemonField}>Field</h4>
        <h4 onClick={movePokemonDex}>Dex</h4>
        <h4 onClick={movePokemonBox}>Box</h4>
        <h4 onClick={test}>TestMethod</h4>
      </NavContainer>
      <EventIconContainer>
        <DashboardButton></DashboardButton>
        <ToggleThemeButton></ToggleThemeButton>
        <ProfileButton></ProfileButton>
        <LogoutButton></LogoutButton>
      </EventIconContainer>
    </Container>
  );
};

export default PokemonHeader;
