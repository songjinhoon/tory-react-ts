import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/user/update');
  }, [navigate]);

  return <></>;
};

export default Admin;
