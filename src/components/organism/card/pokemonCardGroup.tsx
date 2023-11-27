import { FC, useEffect } from 'react';
import PokemonCardGroupItem from '@components/organism/card/pokemonCardGroupItem';
import { CardGroup } from 'react-bootstrap';

const PokemonCardGroup: FC<any> = ({ datas, index: test, setIsComplete }) => {
  return (
    <CardGroup>
      {datas.map((data: any, index: number) => (
        <PokemonCardGroupItem
          key={data.name}
          name={data.name}
          index={test === 5 && index === 2 ? index : null}
          setIsComplete={setIsComplete}
        />
      ))}
    </CardGroup>
  );
};

export default PokemonCardGroup;
