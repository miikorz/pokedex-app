import React from 'react';
import styled from 'styled-components';

const LabelDiv = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-family: monospace;
  font-weight: 600;
  font-size: 20px;
  color: #5E5E5E;
`;

function Label({ children }) {
  return <LabelDiv>{children}</LabelDiv>;
}

export default Label;
