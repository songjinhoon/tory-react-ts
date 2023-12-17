import { useNavigate } from 'react-router-dom';

const UseMove = () => {
  const navigate = useNavigate();

  const moveDashboard = () => {
    navigate('/dashboard');
  };

  const movePokemonField = () => {
    navigate('/pokemon-field');
  };

  const movePokemonDex = () => {
    navigate('/pokemon-dex');
  };

  return {
    moveDashboard,
    movePokemonField,
    movePokemonDex,
  };
};

export default UseMove;
