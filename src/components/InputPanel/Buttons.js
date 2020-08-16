import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalState } from '../../GlobalState';

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

function SpendsButton() {
  const {state, dispatch} = useContext(GlobalState);

  const handleClick = () => {
    const query = state.inputQuery.split('/');
    console.log(query);
  };

  return <StyledButton onClick={handleClick}>Spends</StyledButton>;
}

function Buttons() {
  return (
    <StyledButtonsRow>
      <SpendsButton />
      <StyledButton>Incomes</StyledButton>
    </StyledButtonsRow>
  );
}

export default Buttons;
