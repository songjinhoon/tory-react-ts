import CommonForm from '@components/organism/form/commonForm';
import CommonTitle from '@components/atom/title/commonTitle';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  action: any;
  register: any;
  fields: any[];
}

const SignInTemplate: FC<Props> = (props) => {
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
        <CommonTitle>DEMO PROJECT</CommonTitle>
        <CommonForm {...props}></CommonForm>
        <div style={{ flex: 1, display: 'flex' }}>
          <p style={{ marginRight: '2rem' }}>아직 회원이 아니신가요?</p>
          <Link to="/sign-up">회원가입 하러가기</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInTemplate;
