import styled from '@emotion/styled';

export const Container = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
`;

export const EventIconContainer = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavContainer = styled.div`
  width: 20rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h4 {
    margin-right: 2rem;

    &:hover {
      cursor: pointer;
      background-color: gray;
    }
  }
`;