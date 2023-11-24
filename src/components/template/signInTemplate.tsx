import CommonForm from '@components/organism/form/commonForm';
import CommonTitle from '@components/atom/title/commonTitle';
import { FC } from 'react';

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
      </div>
    </div>
  );
};

export default SignInTemplate;
