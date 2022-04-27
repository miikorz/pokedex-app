import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  border-radius: 5px;
  border: 2px solid black;
  padding: 10px;
  &:hover {
    background: #e9e9e9;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: white;
`;

// TODO?: image size bigger and position relative with z-index in order to make the effect of being above the container?
const Image = styled.img`
  height: 100px;
  width: 100px;
  margin-top: 30px;
`;

const TextContainer = styled.div`
  font-size: 20px;
  margin-top: 50px;
  margin-bottom: 20px;
  text-transform: capitalize;
`;

function PokemonContainer({ name }) {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(name);
  };

  return (
    <Container key={name} onClick={onHandleClick}>
      <Image
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
      />
      <TextContainer>{name}</TextContainer>
    </Container>
  );
}

export default PokemonContainer;
