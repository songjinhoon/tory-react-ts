import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  flex: 2;
  text-align: center;
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma,
    Arial, sans-serif;
  font-weight: 700;
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommonTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return <Header>{children}</Header>;
};

export default CommonTitle;
