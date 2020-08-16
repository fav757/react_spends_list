import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalState } from '../../GlobalState';
import { changeInputQuery } from '../../RootActions';

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding-bottom: 2rem;
`;

const StyledInput = styled.input`
  padding-bottom: 2rem;
  background: #23232d;
  border-radius: 24px;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  color: inherit;

  :focus {
    box-shadow: 0 0 5px #d61f6c;
  }

  ::placeholder {
    color: #c8c8c8;
  }
`;

const StyledIcon = styled.div`
  position: absolute;
  right: 0;
  margin-right: 1rem;

  :hover {
    transform: scale(1.2);
  }
`;

function Input() {
  const { state, dispatch } = useContext(GlobalState);

  const handleChange = (event) =>
    dispatch(changeInputQuery(event.target.value));

  const handleClick = () => dispatch(changeInputQuery(''));

  return (
    <StyledContainer>
      <StyledIcon onClick={handleClick}>
        <i className='fas fa-times'></i>
      </StyledIcon>
      <StyledInput
        value={state.inputQuery || ''}
        onChange={handleChange}
        placeholder='products 10$'
      />
    </StyledContainer>
  );
}

export default Input;
