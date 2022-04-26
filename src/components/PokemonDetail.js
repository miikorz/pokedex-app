import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SectionContainer from "./SectionContainer";
import Label from "./Label";
import Text from "./Text";

const Container = styled.div`
  margin: auto;
  border-radius: 5px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
`;

const ButtonContainer = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  margin-top: 10px;
  font-weight: 600;
  font-family: monospace;
  font-size: 20px;
`;

//TODO: image size bigger and position relative with z-index in order to make the effect of being above the container?
const Image = styled.img`
  height: 100px;
  width: 100px;
`;

const NameContainer = styled.div`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-transform: capitalize;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: monospace;
`;

const PokemonDetail = ({ id, name, types, height, abilities }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate("/pokemon");
  };

  return (
    <Container>
      <ButtonContainer onClick={onHandleClick}>X</ButtonContainer>
      <Image
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
      />
      <NameContainer>{name}</NameContainer>
      <SectionContainer>
        <Label>ID:</Label>
        <Text>{id}</Text>
      </SectionContainer>
      <SectionContainer column>
        <Label>Type:</Label>
        <ul>
          {types &&
            types.map((item) => (
              <li>
                <Text>{item.type.name}</Text>
              </li>
            ))}
        </ul>
      </SectionContainer>
      <SectionContainer>
        <Label>Height:</Label>
        <Text>{height}</Text>
      </SectionContainer>
      <SectionContainer column>
        <Label>Habilities:</Label>
        <ul>
          {abilities &&
            abilities.map((item) => (
              <li>
                <Text>{item.ability.name}</Text>
              </li>
            ))}
        </ul>
      </SectionContainer>
    </Container>
  );
};

export default PokemonDetail;
