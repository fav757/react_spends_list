import React from 'react';
import S from './AppStyles';
import DataSector from '../DataSector/DataSector';
import GraphControlls from '../GraphControlls/GraphControlls';
import UserInput from '../UserInput/UserInput';
import Button from '../Buttons/Buttons';

function App() {
  return (
    <>
      <S.Header>React spends list</S.Header>
      <S.Main>
        <div>
          <UserInput />
          <div>
            <Button category='spends' />
            <Button category='incomes' />
          </div>
        </div>
        <DataSector />
        <GraphControlls />
      </S.Main>
      <S.Footer>
        <a href='https://fav757.github.io/'>Visit my resume website</a>
      </S.Footer>
    </>
  );
}

export default App;
