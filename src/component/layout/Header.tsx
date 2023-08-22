import styled from '@emotion/styled';
import gravatar from 'gravatar';
import LogoutButton from '@component/button/LogoutButton';
import Dropdown from '@component/popup/dropdown/Dorpdown';
import useUser from '@hook/useUser';
import { useCallback, useState } from 'react';

export const Block = styled.header`
  height: 38px;
  background: #350d36;
  color: #ffffff;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
  padding: 5px;
  text-align: center;
`;

export const RightMenu = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & span {
    width: 28px;
    height: 28px;
  }
`;

export const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const ProfileModal = styled.div`
  display: flex;
  padding: 20px;

  & img {
    display: flex;
  }

  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  & #profile-name {
    font-weight: bold;
    display: inline-flex;
  }

  & #profile-active {
    font-size: 13px;
    display: inline-flex;
  }
`;

const Item = styled.button`
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

const Header = () => {
  const { user, isLoading }: { user: any; isLoading: boolean } = useUser(); // 이거 어쩌지;
  const [isRenderPopup, setIsRenderPopup] = useState(false);
  const [isRenderUserUpdatePopup, setIsRenderUserUpdatePopup] = useState(false);
  const popupOpen = useCallback(() => {
    setIsRenderPopup(true);
  }, []);
  const popupClose = useCallback(() => {
    setIsRenderPopup(false);
  }, []);
  const userUpdatePopupOpen = useCallback(() => {
    setIsRenderUserUpdatePopup(true);
  }, []);
  const userUpdatePopupClose = useCallback(() => {
    setIsRenderUserUpdatePopup(false);
  }, []);

  return (
    <Block>
      <RightMenu>
        {!isLoading && (
          <span onClick={popupOpen}>
            <ProfileImg src={gravatar.url(user.email, { s: '28px', d: 'retro' })} alt={user.nickname} />
            <Dropdown
              show={isRenderPopup}
              onClose={popupClose}
              style={{ right: 0, top: 30 }}
              isCloseButtonActive={true}
            >
              <ProfileModal>
                <img src={gravatar.url(user.email, { s: '36px', d: 'retro' })} alt={user.nickname} />
                <div>
                  <span id="profile-name">{user.nickname}</span>
                  <span id="profile-active">Active</span>
                </div>
              </ProfileModal>
              <Item onClick={userUpdatePopupOpen}>사용자정보변경</Item>
              <LogoutButton></LogoutButton>
            </Dropdown>
          </span>
        )}
      </RightMenu>
    </Block>
  );
};

export default Header;
