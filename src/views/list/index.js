import React, { useState, useEffect } from 'react';
import {makePokemonRequest} from '../../utils/makeRequest';
import { endPoints } from '../../utils/api/endpoints'

const List = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    // console.log(makePokemonRequest)
    // makePokemonRequest(endPoints.getPokemonList());
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let result = {};
    try {
      fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151',
        options
      )
        .then((res) => res.json())
        .then((data) => {
          setPokemons(data.results);
        });
    } catch (error) {
    }
  }, []);

  return <div>list here
    {pokemons.map((item) => (
      <div>
        {item.name}
      </div>
    ))}
  </div>;
};

export default List;
