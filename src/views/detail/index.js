import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetail from '../../components/PokemonDetail';
import DetailContainer from '../../components/DetailContainer';
import ContentNotFound from '../../components/NotFound';
import { makeRequest } from '../../utils/api/request';

function Detail() {
  const { pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    makeRequest(pokemonName).then((res) => {
      setPokemonData(res);
    });
  }, [pokemonName]);

  return (
    <DetailContainer>
      {pokemonData?.id ? (
        <PokemonDetail
          id={pokemonData?.id}
          types={pokemonData?.types}
          abilities={pokemonData?.abilities}
          height={pokemonData?.height}
          name={pokemonData?.name}
        />
      ) : <ContentNotFound />}
    </DetailContainer>
  );
}

export default Detail;
