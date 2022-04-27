import { pokemon, pokemonList } from '../__tests__/mockedData/data';

export default function request(name) {
  return new Promise((resolve) => {
    process.nextTick(() => (name
      ? resolve(pokemon)
      : resolve(pokemonList)
    ));
  });
}
