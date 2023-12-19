import PokemonItem from '@components/molecule/card/pokemonItem';

const PokemonCard = ({ pokemon }: { pokemon: any }) => {
  const id = pokemon.url
    .substring(pokemon.url.lastIndexOf('/pokemon/') + 9)
    .replace('/', '');

  return (
    <PokemonItem
      id={id}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      name={pokemon.name}
    ></PokemonItem>
  );
};

export default PokemonCard;
