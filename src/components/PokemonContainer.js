import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  border: 2px solid black;
  padding: 10px;
  &:hover {
    background: #dad9d9;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
`;

const Image = styled.image`

  ${(props) =>
    props.name &&
    css`
      background-image: url(https://img.pokemondb.net/sprites/black-white/anim/normal/${props.name}.gif);
      color: white;
      padding: 100px;
      background-size: cover;
    `}
`;

const PokemonContainer = ({ name }) => {
  return (
    <Container key={name}>
      <Image name={name} />
      {name}
    </Container>
  );
};

export default PokemonContainer;
