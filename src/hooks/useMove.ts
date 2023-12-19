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

  const movePokemonBox = () => {
    navigate('/pokemon-box');
  };

  return {
    moveDashboard,
    movePokemonField,
    movePokemonDex,
    movePokemonBox,
  };
};

export default UseMove;
