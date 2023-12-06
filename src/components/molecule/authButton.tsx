import Button from '@components/atom/button';
import { AuthFormProps } from '@components/organism/form/authForm';

const AuthButton = ({ type }: { type: AuthFormProps['type'] }) => {
  return (
    <Button style={{ width: '20rem', height: '3rem', marginTop: '3rem' }}>
      {type === 'signIn' && 'SignIn'}
      {type !== 'signIn' && 'SignUp'}
    </Button>
  );
};

export default AuthButton;
