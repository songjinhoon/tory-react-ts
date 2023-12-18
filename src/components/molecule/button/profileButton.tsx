import { CiUser } from 'react-icons/ci';
import { Container } from '@components/molecule/button/styles';
import { useCallback } from 'react';
import { useModalDispatch } from '@context/modal';

const ProfileButton = () => {
  const modalDispatch = useModalDispatch();
  const _onClick = useCallback(() => {
    modalDispatch({ type: 'openModal', value: 'pokemonUser' });
  }, [modalDispatch]);

  return (
    <Container>
      <CiUser size={30} onClick={_onClick}></CiUser>
    </Container>
  );
};
export default ProfileButton;
