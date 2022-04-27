/* eslint-disable no-undef */
import { makeRequest } from '../../src/utils/api/request';
import { pokemonList, pokemon } from '../mockedData/data';

jest.mock('../../__mocks__/request');

global.fetch = jest.fn((url) => Promise.resolve({
  json: () => {
    const returnPokemon = url.includes(pokemon.name);
    return Promise.resolve(returnPokemon ? pokemon : pokemonList);
  },
}));

beforeEach(() => {
  fetch.mockClear();
});

describe('Pokemon API response', () => {
  it('should get the list of pokemons', async () => {
    await expect(makeRequest()).resolves.toEqual(pokemonList);
  });

  it('should get an specific pokemon if we provide a name', async () => {
    await expect(makeRequest('bulbasaur')).resolves.toEqual(pokemon);
  });
});
