import React from "react";
import styled from "styled-components";

const TextDiv = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-family: monospace;
  font-size: 20px;
  color: #5E5E5E;
  margin-left: 5px;
`;

const Text = ({ children }) => {
  return <TextDiv>{children}</TextDiv>;
};

export default Text;
