import React, { useContext } from 'react';
import S from './GraphControllsStyles';
import { GlobalState } from '../../GlobalState';
import { changeDataSector } from '../../RootActions';

function GraphControlls() {
  const { dispatch } = useContext(GlobalState);
  const handleClick = (value) => dispatch(changeDataSector(value));

  return (
    <S.Bar>
      <S.HiddingSector>
        <S.Choose>Choose graph</S.Choose>
        <S.Fone />
      </S.HiddingSector>
      <S.VisibleSector>
        <S.Button onClick={() => handleClick('data table')}>Table</S.Button>
        <S.Button onClick={() => handleClick('line graph')}>Line</S.Button>
        <S.Button onClick={() => handleClick('pie graph')}>Pie</S.Button>
      </S.VisibleSector>
    </S.Bar>
  );
}

export default GraphControlls;
