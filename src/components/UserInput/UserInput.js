import React, { useContext, useState } from 'react';
import S from './UserInputStyles';
import { GlobalState } from '../../GlobalState';
import { addToSpends, addToIncomes } from '../../RootActions';

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
    <S.Container>
      <S.IconsWrap>
        <S.Icon onClick={handleClick} className='fas fa-check' />
        <S.Icon onClick={() => setInputQuery('')} className='fas fa-times' />
      </S.IconsWrap>
      <S.Input
        onKeyDown={handlePress}
        value={inputQuery || ''}
        onChange={handleChange}
        placeholder={`Enter ${phase}`}
      />
    </S.Container>
  );
}

export default Input;
