import React from 'react';
import styled from 'styled-components';
import Input from './Input';

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
      <Input />
      <StyledButtonsRow>
        <StyledButton>Spends</StyledButton>
        <StyledButton>Incomes</StyledButton>
      </StyledButtonsRow>
    </div>
  );
}

export default InputPanel;
