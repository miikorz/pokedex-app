import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 64%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 85%;
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`;

function SearchInput({ onChange }) {
  const [inputValue, setInputValue] = useState('');

  const onHandleChangeInput = (e) => {
    const { value } = e.target;
    onChange(value);
    setInputValue(value);
  };

  return (
    <InputContainer>
      <Input
        value={inputValue}
        onChange={onHandleChangeInput}
        type="text"
        placeholder="Search for any Pokemon!"
      />
    </InputContainer>
  );
}

export default SearchInput;
