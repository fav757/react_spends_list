import React from 'react';
import styled from 'styled-components';
import InputPanel from './components/InputPanel/InputPanel';
import DataTable from './components/DataTable/DataTable';
import GraphControlls from './components/GraphControlls/GraphControlls';

const StyledApp = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;

  header {
    font-size: 2rem;
    text-align: center;
    margin-bottom:2rem;
  }

  main {
    padding-bottom: 63px;

    >*:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;

    a {
      color: #c8c8c8;
    }
  }
`;

function App() {
  return (
    <StyledApp>
      <header>React spends list</header>
      <main>
        <InputPanel />
        <DataTable />
        <GraphControlls />
      </main>
      <footer>
        <a href='https://fav757.github.io/'>Visit my resume website</a>
      </footer>
    </StyledApp>
  );
}

export default App;
