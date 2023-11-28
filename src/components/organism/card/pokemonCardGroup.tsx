import { FC } from 'react';
import PokemonCardGroupItem from '@components/organism/card/pokemonCardGroupItem';
import { CardGroup } from 'react-bootstrap';

const PokemonCardGroup: FC<any> = ({ datas, setIsComplete }) => {
  return (
    <CardGroup>
      {datas.map((data: any, index: number) => (
        <PokemonCardGroupItem
          key={index + 1}
          name={data.name}
          resource={data.url}
          setIsComplete={setIsComplete}
        />
      ))}
    </CardGroup>
  );
};

export default PokemonCardGroup;
