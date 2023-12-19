import AuthForm, { AuthFormProps } from '@components/organism/auth/authForm';
import React, { FC } from 'react';
import styled from '@emotion/styled';
import AuthLinker from '@components/organism/auth/authLinker';

interface Props extends AuthFormProps {}

const AuthTemplate: FC<Props> = (props) => {
  return (
    <Container>
      <ContainerTemplate>
        <Header>DEMO PROJECT</Header>
        <Content>
          <AuthForm {...props}></AuthForm>
        </Content>
        <Bottom>
          <AuthLinker type={props.type}></AuthLinker>
        </Bottom>
      </ContainerTemplate>
    </Container>
  );
};

export default AuthTemplate;

const Container = styled.div`
  padding: 0 10%;
  height: 100vh;
`;

const ContainerTemplate = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  text-align: center;
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma,
    Arial, sans-serif;
  font-weight: 700;
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 10rem;
  flex: 3;
`;

const Content = styled.div`
  margin-bottom: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 4;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 3;
`;
