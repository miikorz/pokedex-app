import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  color: #525252;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 300;
`;

const AmountContainer = styled.div`
  font-size: 20px;
`;

function ListHeader({ pokemonAmount }) {
  return (
    <Container>
      <Title>Generation 1</Title>
      <AmountContainer>
        {pokemonAmount}
        {' '}
        pokemon
      </AmountContainer>
    </Container>
  );
}

export default ListHeader;
