import CommonHeader from '@components/organism/header/commonHeader';
import PokemonMain from '../../assets/pokemonMain.gif';
import BlogMain from '../../assets/blogMain.gif';
import { useState } from 'react';
import CommonBlock from '@components/atom/block/commonBlock';
import { useNavigate } from 'react-router-dom';

const DashboardTemplate = () => {
  const navigate = useNavigate();
  const [isRotate, setIsRotate] = useState({
    blog: false,
    pokemon: false,
  });

  return (
    <>
      <CommonHeader></CommonHeader>
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
              ? { transform: 'rotate(20deg)', width: 600, cursor: 'pointer' }
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
        <CommonBlock></CommonBlock>
        <img
          style={
            isRotate.pokemon
              ? { transform: 'rotate(20deg)', width: 600, cursor: 'pointer' }
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
          onClick={() => navigate('/pokemon')}
        />
      </div>
    </>
  );
};

export default DashboardTemplate;
