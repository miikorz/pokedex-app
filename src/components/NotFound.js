import React from 'react';
import styled from 'styled-components';

const ErrorDiv = styled.div`
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  font-family: monospace;
  font-weight: 600;
  font-size: 40px;
  color: #5e5e5e;
`;

function ContentNotFound() {
  return <ErrorDiv>Content not found!</ErrorDiv>;
}

export default ContentNotFound;
