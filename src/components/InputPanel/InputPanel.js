import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background: #23232d;
  border-radius: 64px;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  color: #E5E5E5;

  ::placeholder {
    color: #C8C8C8;
  }
`;

function InputPanel() {
  return (
    <div>
      <StyledInput placeholder='products 10$' />
      <div>
        <button>Spends</button>
        <button>Incomes</button>
      </div>
    </div>
  );
}

export default InputPanel;
