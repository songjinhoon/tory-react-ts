import useIntersect from '@hooks/useIntersect';
import useSWRInfinite from 'swr/infinite';
import { pokemonFetcher } from '@utils/fetcher';
import PokemonCardGroup from '@components/molecule/card/pokemonCardGroup';

const PAGE_SIZE = 36;
const REF_INDEX = 18;

const PokemonDex = () => {
  const { data, size, setSize, isLoading }: any = useSWRInfinite(
    (index) =>
      `https://pokeapi.co/api/v2/pokemon?offset=${
        PAGE_SIZE * index
      }&limit=${PAGE_SIZE}`,
    pokemonFetcher,
  );

  const ref = useIntersect(
    async (entry, observer) => {
      setTimeout(() => {
        observer.unobserve(entry.target);
        setSize(size + 1).then(() => {});
      }, 1000);
    },
    {
      root: null,
      rootMargin: '',
      threshold: 1,
    },
  );

  return (
    <>
      {!isLoading &&
        data.map((innerData: any) =>
          innerData.results.map((pokemon: any, index: any) => (
            <div key={index}>
              {index !== REF_INDEX && (
                <PokemonCardGroup pokemon={pokemon}></PokemonCardGroup>
              )}
              {index === REF_INDEX && (
                <>
                  <PokemonCardGroup pokemon={pokemon}></PokemonCardGroup>
                  <div ref={ref}></div>
                </>
              )}
            </div>
          )),
        )}
    </>
  );
};
export default PokemonDex;
