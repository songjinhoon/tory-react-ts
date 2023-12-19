import { CiUser } from 'react-icons/ci';
import { Container } from '@components/molecule/button/styles';
import { useCallback } from 'react';
import { useModalDispatch } from '@context/modal';
import { useLocation } from 'react-router-dom';

const ProfileButton = () => {
  const location = useLocation();
  const modalDispatch = useModalDispatch();
  const _onClick = useCallback(() => {
    if (location.pathname.includes('dashboard')) {
      modalDispatch({ type: 'openModal', value: 'userUpdate' });
    } else {
      modalDispatch({ type: 'openModal', value: 'pokemonUser' });
    }
  }, [location, modalDispatch]);

  return (
    <Container>
      <CiUser size={30} onClick={_onClick}></CiUser>
    </Container>
  );
};
export default ProfileButton;
