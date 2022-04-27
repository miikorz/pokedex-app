import { apiParams } from '../constants/apiParams';

export const endPoints = {
  getPokemonList: () => `${apiParams.POKEMON}${apiParams.LIMIT}`,
  getPokemon: (name) => `${apiParams.POKEMON}/${name}`,
};

export default endPoints;
