import PokemonHeader from '@components/organism/header/pokemonHeader';
import PokemonFieldHeader from '@components/organism/header/pokemonFieldHeader';
import CommonBlock from '@components/atom/block/commonBlock';

const PokemonFieldTemplate = () => {
  return (
    <>
      <PokemonHeader></PokemonHeader>
      <CommonBlock style={{ height: '86px' }}></CommonBlock>
      <PokemonFieldHeader></PokemonFieldHeader>
      <div>Pokemon Templa111te</div>
    </>
  );
};

export default PokemonFieldTemplate;
