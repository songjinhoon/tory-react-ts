import BlogMain from '@assets/customBlogMain.gif';
import PokemonMain from '@assets/customPokemonMain.gif';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  type: 'blog' | 'pokemon';
}

const DashboardCard: FC<Props> = ({ type }) => {
  const [isRotate, setIsRotate] = useState(false);
  const navigate = useNavigate();

  return (
    <img
      style={
        isRotate
          ? { transform: 'rotate(20deg)', width: 400, cursor: 'pointer' }
          : {}
      }
      src={type === 'blog' ? BlogMain : PokemonMain}
      alt={'card'}
      width={300}
      onMouseOver={() => {
        setIsRotate((prevState) => !prevState);
      }}
      onMouseOut={() => {
        setIsRotate((prevState) => !prevState);
      }}
      onClick={() => {
        if (type === 'blog') {
          navigate('/blog');
        } else {
          navigate('/pokemon-field');
        }
      }}
    />
  );
};

export default DashboardCard;
