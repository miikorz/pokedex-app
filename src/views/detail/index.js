import React, { useState, useEffect } from "react";
import { endPoints } from "../../utils/api/endpoints";
import { useParams } from "react-router-dom";
import PokemonDetail from "../../components/PokemonDetail";
import styled from "styled-components";

const Detail = () => {
  let { pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    console.log(pokemonName);

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      fetch(
        `https://pokeapi.co/api/v2/${endPoints.getPokemon(pokemonName)}`,
        options
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setPokemonData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [pokemonName]);

  return (
    <div>
      {pokemonData?.id && (
        <PokemonDetail
          id={pokemonData?.id}
          types={pokemonData?.types}
          abilities={pokemonData?.abilities}
          height={pokemonData?.height}
          name={pokemonData?.name}
        />
      )}
    </div>
  );
};

export default Detail;
