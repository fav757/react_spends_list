import React from 'react';
import styled from 'styled-components';
import InputPanel from './components/InputPanel/InputPanel';
import DataTable from './components/DataTable/DataTable';
import GraphControlls from './components/GraphControlls/GraphControlls';

const StyledApp = styled.div`
  >h1 {
    text-align: center;
  }

  >*:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

function App() {
  return (
    <StyledApp>
      <h1>React spends list</h1>
      <InputPanel />
      <DataTable />
      <GraphControlls />
    </StyledApp>
  );
}

export default App;
