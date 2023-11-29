import Api from '@utils/axiosConfig';
import PokemonApi from '@utils/pokemonApiConfig';

const fetcher = (url: string) =>
  Api.get(url, {
    withCredentials: true,
  }).then((response) => response.data);

export default fetcher;

export const pokemonFetcher = async (url: string) => {
  const response = await PokemonApi.get(url);
  return response.data;
};
