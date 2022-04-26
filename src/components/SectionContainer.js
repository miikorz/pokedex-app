import React from "react";
import styled, { css } from "styled-components";

const SectionDiv = styled.div`
  width: 100%;
  margin: 20px 15px 0 50px;
  display: flex;
  justify-content: flex-start;

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
`;

const SectionContainer = ({ children, column = false }) => {
  return <SectionDiv column={column}>{children}</SectionDiv>;
};

export default SectionContainer;
