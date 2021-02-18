import React, { useContext } from 'react';
import S from './ButtonsStyles';
import { GlobalState } from '../../GlobalState';
import { changeType } from '../../RootActions';

function Button({ category }) {
  const { state, dispatch } = useContext(GlobalState);
  const handleClick = () => dispatch(changeType(category));
  const isActive = state.activeType === category;

  return (
    <S.Button data-isActive={isActive} onClick={handleClick}>
      {category}
    </S.Button>
  );
}

export default Button;
