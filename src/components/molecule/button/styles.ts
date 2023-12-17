import styled from '@emotion/styled';

export const Container = styled.div`
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

export const PokeBallContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 5px;
  transition: 0.3s ease;

  &:hover {
    transform: rotate(360deg);
  }
`;
