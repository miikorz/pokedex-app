import React from 'react';
import styled from 'styled-components';
import mainLogo from '../assets/pokemonlogo.png';

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Logo = styled.img`
  height: 150px;
  object-fit: contain;
`;

function PokemonLogo() {
  return (
    <LogoContainer>
      <Logo src={mainLogo} />
    </LogoContainer>
  );
}

export default PokemonLogo;
