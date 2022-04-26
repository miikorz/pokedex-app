import React, { useState, useEffect, memo } from "react";
import { endPoints } from "../../utils/api/endpoints";
import PokemonContainer from "../../components/PokemonContainer";
import GridContainer from "../../components/GridContainer"
import styled from "styled-components";

const List = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // We could isolate the logic to do the request in a external method, but we would have to add some babel plugins to manage async/await functions
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      fetch(`https://pokeapi.co/api/v2/${endPoints.getPokemonList()}`, options)
        .then((res) => res.json())
        .then((data) => {
          setPokemons(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <GridContainer>
        {pokemons.length > 0 &&
          pokemons.map((item) => (
            <div key={item.name}>
              <PokemonContainer key={item.name} name={item.name} />
            </div>
          ))}
      </GridContainer>
    </div>
  );
};

export default memo(List);
