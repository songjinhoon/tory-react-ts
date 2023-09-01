import styled from '@emotion/styled';

export const ModalContainerBlock = styled.div`
  position: fixed;
  top: 0;
  z-index: 1010;
  width: 100%;
  height: 100vh;
  /*width: 50%;
  height: 50vh;*/
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalsContainerBlock = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBlock = styled.div`
  z-index: 1011;
  display: inline-block;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow:
    0 0 0 1px var(--saf-0),
    0 4px 12px 0 rgba(0, 0, 0, 0.12);
  background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);
  border-radius: 6px;
  user-select: none;
  width: 500px;
  height: 700px;
  padding: 5px;
`;

export const ModalHeader = styled.header`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
  border-radius: 6px;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
    font-size: 30px;
    cursor: pointer;
  }
`;

export const ModalContent = styled.section``;
