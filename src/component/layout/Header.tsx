import gravatar from 'gravatar';
import LogoutButton from '@component/button/LogoutButton';
import Dropdown from '@component/popup/dropdown/Dorpdown';
import useUser from '@hook/useUser';
import { useCallback, useState } from 'react';
import {
  Block,
  Item,
  ProfileImg,
  ProfileModal,
  RightMenu,
} from '@component/layout/styles';
import { useModalDispatch } from '../../context/modal';

const Header = () => {
  const { user, isLoading }: { user: any; isLoading: boolean } = useUser(); // 이거 어쩌지;
  const modalDispatch = useModalDispatch();

  const userUpdateModalOpen = useCallback(() => {
    modalDispatch({
      type: 'addModal',
      value: 'userUpdate',
    });
  }, [modalDispatch]);

  const [isRenderPopup, setIsRenderPopup] = useState(false);
  const popupOpen = useCallback(() => {
    setIsRenderPopup(true);
  }, []);
  const popupClose = useCallback(() => {
    setIsRenderPopup(false);
  }, []);

  return (
    <Block>
      <RightMenu>
        {!isLoading && (
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
