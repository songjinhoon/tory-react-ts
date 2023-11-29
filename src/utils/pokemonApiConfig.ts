import axios from 'axios';

const PokemonApi = axios.create({
  withCredentials: false,
});

export default PokemonApi;
