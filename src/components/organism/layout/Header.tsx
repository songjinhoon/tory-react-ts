import gravatar from 'gravatar';
import LogoutButton from '../../molecule/button/logoutButton';
import Dropdown from '../popup/dropdown/Dorpdown';
import useUser from '@hooks/useUser';
import { useCallback, useState } from 'react';
import {
  Block,
  Item,
  ProfileImg,
  ProfileModal,
  RightMenu,
} from './styles';
import { useModalDispatch } from '../../../context/modal';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { user, isLoading }: { user: any; isLoading: boolean } = useUser(); // 이거 어쩌지;
  const modalDispatch = useModalDispatch();
  const [isRenderPopup, setIsRenderPopup] = useState(false);

  const userUpdateModalOpen = useCallback(() => {
    modalDispatch({
      type: 'addModal',
      value: 'userUpdate',
    });
  }, [modalDispatch]);

  const popupOpen = useCallback(() => {
    setIsRenderPopup(true);
  }, []);
  const popupClose = useCallback(() => {
    setIsRenderPopup(false);
  }, []);

  const _onClick = useCallback(
    (menuId: string) => {
      navigate(menuId);
    },
    [navigate],
  );

  if (!isLoading && !user) {
    navigate('/sign-in');
  }

  return (
    <Block>
      <div>
        <button onClick={() => _onClick('/dashboard')}>DASHBOARD</button>
        <button onClick={() => _onClick('/post')}>POST</button>
        <button onClick={() => _onClick('/admin')}>ADMIN</button>
      </div>
      <RightMenu>
        {!isLoading && user && (
          <span onClick={popupOpen}>
            <ProfileImg
              src={gravatar.url(user.email, { s: '28px', d: 'retro' })}
              alt={user.nickname}
            />
            <Dropdown
              show={isRenderPopup}
              onClose={popupClose}
              style={{ right: 0, top: 30 }}
              isCloseButtonActive={true}
            >
              <ProfileModal>
                <img
                  src={gravatar.url(user.email, { s: '36px', d: 'retro' })}
                  alt={user.nickname}
                />
                <div>
                  <span id="profile-name">{user.nickname}</span>
                  <span id="profile-active">Active</span>
                </div>
              </ProfileModal>
              <Item onClick={userUpdateModalOpen}>사용자정보변경</Item>
              <LogoutButton></LogoutButton>
            </Dropdown>
          </span>
        )}
      </RightMenu>
    </Block>
  );
};

export default Header;
