import { Link } from 'react-router-dom';
import React from 'react';

const AuthLinker = (props: any) => {
  return (
    <>
      {props.type === 'signIn' && <Link to="/sign-up">회원가입 하러가기</Link>}
      {props.type === 'signUp' && <Link to="/sign-in">로그인 하러가기</Link>}
    </>
  );
};

export default AuthLinker;
