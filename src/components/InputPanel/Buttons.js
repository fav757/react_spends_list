import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalState } from '../../GlobalState';
import { changeType } from '../../RootActions';

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

  &[data-isactive='true'] {
    text-shadow: 0 0 5px #f3b9d1;
  }

  :first-child {
    margin-right: 1rem;
  }
`;

function SpendsButton() {
  const { state, dispatch } = useContext(GlobalState);
  const handleClick = () => dispatch(changeType('spends'));
  const isActive = state.activeType === 'spends';

  return (
    <StyledButton data-isactive={isActive} onClick={handleClick}>
      Spends
    </StyledButton>
  );
}

function IncomesButton() {
  const { state, dispatch } = useContext(GlobalState);
  const handleClick = () => dispatch(changeType('incomes'));
  const isActive = state.activeType === 'incomes';

  return (
    <StyledButton data-isactive={isActive} onClick={handleClick}>
      Incomes
    </StyledButton>
  );
}

function Buttons() {
  return (
    <StyledButtonsRow>
      <SpendsButton />
      <IncomesButton />
    </StyledButtonsRow>
  );
}

export default Buttons;
