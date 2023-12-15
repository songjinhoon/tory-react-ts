import DashboardHeader from '@components/organism/header/dashboardHeader';
import PokemonMain from '@assets/customPokemonMain.gif';
import BlogMain from '@assets/customBlogMain.gif';
import { useState } from 'react';
import Block from '@components/molecule/block';
import { useNavigate } from 'react-router-dom';
import { useThemeState } from '@context/theme';

const DashboardTemplate = () => {
  const themeState = useThemeState();
  const navigate = useNavigate();
  const [isRotate, setIsRotate] = useState({
    blog: false,
    pokemon: false,
  });

  return (
    <div className={themeState.theme}>
      <DashboardHeader></DashboardHeader>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
        }}
      >
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
      </div>
    </div>
  );
};

export default DashboardTemplate;
