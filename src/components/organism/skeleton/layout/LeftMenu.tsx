import React from 'react';
import styled from '@emotion/styled';

export const Block = styled.div`
  width: 200px;
  height: 90vh;
  background-color: antiquewhite;
`;

const LeftMenu = () => {
  return (
    <Block>
      <ul>
        <li>사용자정보 변경</li>
      </ul>
    </Block>
  );
};

export default LeftMenu;
