import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin-bottom: 1rem;
  background: #23232d;
  border-radius: 24px;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  color: inherit;

  ::placeholder {
    color: #c8c8c8;
  }
`;

const StyledButtonsRow = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  flex: 1;
  color: inherit;
  padding: 0.5rem 1rem;
  border-radius: 24px;
  background: #97124a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;

  :first-child {
    margin-right: 1rem;
  }
`;

function InputPanel() {
  return (
    <div>
      <StyledInput placeholder='products 10$' />
      <StyledButtonsRow>
        <StyledButton>Spends</StyledButton>
        <StyledButton>Incomes</StyledButton>
      </StyledButtonsRow>
    </div>
  );
}

export default InputPanel;
