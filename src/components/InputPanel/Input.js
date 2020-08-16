import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalState } from '../../GlobalState';
import { changeInputQuery } from '../../RootActions';

const StyledInput = styled.input`
  margin-bottom: 2rem;
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

function Input() {
  const {state, dispatch} = useContext(GlobalState);
  const handleChange = (event) =>
    dispatch(changeInputQuery(event.target.value));

  return <StyledInput onChange={handleChange} defaultValue={state.inputQuery} placeholder='products 10$' />;
}

export default Input;
