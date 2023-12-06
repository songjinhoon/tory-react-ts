import PokemonHeader from '@components/organism/header/pokemonHeader';
import PokemonFieldHeader from '@components/organism/header/pokemonFieldHeader';
import Block from '@components/molecule/block';

const PokemonFieldTemplate = () => {
  return (
    <>
      <PokemonHeader></PokemonHeader>
      <Block style={{ height: '86px' }}></Block>
      <PokemonFieldHeader></PokemonFieldHeader>
      <div>Pokemon Templa111te</div>
    </>
  );
};

export default PokemonFieldTemplate;
