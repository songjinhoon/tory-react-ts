import 'bootstrap/dist/css/bootstrap.min.css';
import AuthForm, { AuthFormProps } from '@components/organism/form/authForm';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const AuthTemplate: FC<AuthFormProps> = (props) => {
  return (
    <div style={{ padding: '0 10%', height: '100vh' }}>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Title>DEMO PROJECT</Title>
        <AuthForm {...props}></AuthForm>
        <div style={{ flex: 1, display: 'flex' }}>
          {props.type === 'signIn' && (
            <Link to="/sign-up">회원가입 하러가기</Link>
          )}
          {props.type === 'signUp' && (
            <Link to="/sign-in">로그인 하러가기</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;

const Title = styled.div`
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
