import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { GlobalState } from '../../GlobalState';
import { addToSpends, addToIncomes } from '../../RootActions';

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

const StyledIconsContainer = styled.div`
  position: absolute;
  right: 0;
  margin-right: 0.4rem;

  i {
    margin: 0 0.4rem;
    cursor: pointer;

    :hover {
      transform: scale(1.2);
    }
  }
`;

const spendData = {
  category: '',
  amount: 0,
  comment: null,
};

function Input() {
  const { state, dispatch } = useContext(GlobalState);
  const [inputQuery, setInputQuery] = useState('');
  const [phase, setPhase] = useState('category');

  const handleChange = (event) => setInputQuery(event.target.value);

  const handleClick = () => {
    if (phase === 'category') {
      if (!inputQuery) {
        alert('Dont let category field be empty');
        return;
      } else {
        spendData[phase] = inputQuery.toLocaleLowerCase();
      }
    } else if (phase === 'amount') {
      const result = parseFloat(inputQuery);
      if (isNaN(result)) {
        alert('Amount is not correct. Please try again');
        setInputQuery('');
        return;
      } else {
        spendData[phase] = parseFloat(inputQuery);
      }
    } else {
      spendData[phase] = inputQuery;
    }
    setInputQuery('');

    let newPhase;
    if (phase === 'category') {
      newPhase = 'amount';
    } else if (phase === 'amount') {
      newPhase = 'comment';
    } else if (phase === 'comment') {
      dispatch(
        state.activeType === 'spends'
          ? addToSpends(spendData)
          : addToIncomes(spendData)
      );
      newPhase = 'category';
    }

    setPhase(newPhase);
  };

  const handlePress = (event) => {
    if (event.key === 'Enter') handleClick();
  };

  return (
    <StyledContainer>
      <StyledIconsContainer>
        <i onClick={handleClick} className='fas fa-check'></i>
        <i onClick={() => setInputQuery('')} className='fas fa-times'></i>
      </StyledIconsContainer>
      <StyledInput
        onKeyDown={handlePress}
        value={inputQuery || ''}
        onChange={handleChange}
        placeholder={`Enter ${phase}`}
      />
    </StyledContainer>
  );
}

export default Input;
