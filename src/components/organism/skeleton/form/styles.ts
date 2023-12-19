import styled from '@emotion/styled';

export const InputForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 16px;

  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;

export const Error = styled.div`
  width: 100%;
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;
