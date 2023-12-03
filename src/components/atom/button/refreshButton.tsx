import RefreshIcon from '../../../assets/refresh.png';
import styled from '@emotion/styled';
import { FC } from 'react';

const Box = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(360deg);
  }
`;

const RefreshButton: FC<any> = ({ onClick }) => {
  return (
    <Box
      src={RefreshIcon}
      alt={"refreshIcon"}
    />
  );
};

export default RefreshButton;
