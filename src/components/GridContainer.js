import React from 'react';
import styled from 'styled-components';

const GridDiv = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(3, 20%);
  justify-content: center;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 40%);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 80%);
  }
`;

function GridContainer({ children }) {
  return <GridDiv>{children}</GridDiv>;
}

export default GridContainer;
