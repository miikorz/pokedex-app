import { endPoints } from './endpoints';
import { baseUrl } from '../constants/apiParams';

export async function makeRequest(name) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  let response;

  try {
    await fetch(`${baseUrl}${name ? endPoints.getPokemon(name) : endPoints.getPokemonList()}`, options)
      .then((res) => res.json())
      .then((data) => {
        response = data;
      });
  } catch (error) {
    throw new Error(error);
  }

  return response;
}

export default {};
