import React from 'react';
import styled from 'styled-components';

const DetailDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
`;

function DetailContainer({ children }) {
  return <DetailDiv>{children}</DetailDiv>;
}

export default DetailContainer;
