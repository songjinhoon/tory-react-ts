import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/user/update');
  }, []);

  return <></>;
};

export default Admin;
