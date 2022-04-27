import React, { useState, useEffect, memo } from 'react';
import PokemonContainer from '../../components/PokemonContainer';
import GridContainer from '../../components/GridContainer';
import PokemonLogo from '../../components/PokemonLogo';
import ListHeader from '../../components/ListHeader';
import SearchInput from '../../components/SearchInput';
import ContentNotFound from '../../components/NotFound';
import { makeRequest } from '../../utils/api/request';

function List() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonFullList, setPokemonFullList] = useState([]);

  useEffect(() => {
    makeRequest().then((res) => {
      setPokemons(res.results);
      setPokemonFullList(res.results);
    });
  }, []);

  const handleOnSearchChange = (searchValue) => {
    const filteredList = pokemonFullList.filter((pokemon) => pokemon.name.toLowerCase().includes(searchValue.toLowerCase()));
    setPokemons(filteredList);
  };

  return (
    <>
      <PokemonLogo />
      {pokemonFullList.length > 0 && (
        <ListHeader pokemonAmount={pokemonFullList.length} />
      )}
      <SearchInput onChange={handleOnSearchChange} />
      {pokemons.length > 0 ? (
        <GridContainer>
          {pokemons.length > 0
            && pokemons.map((item) => (
              <div key={item.name}>
                <PokemonContainer key={item.name} name={item.name} />
              </div>
            ))}
        </GridContainer>
      ) : (
        <ContentNotFound />
      )}
    </>
  );
}

export default memo(List);
