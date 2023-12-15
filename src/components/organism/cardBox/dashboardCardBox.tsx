import BlogMain from '@assets/customBlogMain.gif';
import Block from '@components/molecule/block';
import PokemonMain from '@assets/customPokemonMain.gif';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DashboardCardBox = () => {
  const navigate = useNavigate();
  const [isRotate, setIsRotate] = useState({
    blog: false,
    pokemon: false,
  });

  return (
    <>
      <img
        style={
          isRotate.blog
            ? { transform: 'rotate(20deg)', width: 400, cursor: 'pointer' }
            : {}
        }
        src={BlogMain}
        alt={'blogMain'}
        width={300}
        onMouseOver={() => {
          setIsRotate({
            ...isRotate,
            blog: true,
          });
        }}
        onMouseOut={() => {
          setIsRotate({
            blog: false,
            pokemon: false,
          });
        }}
        onClick={() => alert('기능 준비중...')}
      />
      <Block></Block>
      <img
        style={
          isRotate.pokemon
            ? { transform: 'rotate(20deg)', width: 400, cursor: 'pointer' }
            : {}
        }
        src={PokemonMain}
        alt={'pokemonMain'}
        width={300}
        onMouseOver={() => {
          setIsRotate({
            ...isRotate,
            pokemon: true,
          });
        }}
        onMouseOut={() => {
          setIsRotate({
            blog: false,
            pokemon: false,
          });
        }}
        onClick={() => navigate('/pokemon-field')}
      />
    </>
  );
};

export default DashboardCardBox;
