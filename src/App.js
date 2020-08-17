import React from 'react';
import styled from 'styled-components';
import InputPanel from './components/InputPanel/InputPanel';
import DataTable from './components/DataTable/DataTable';
import GraphControlls from './components/GraphControlls/GraphControlls';

const StyledApp = styled.div`
  header {
    font-size: 2rem;
    text-align: center;
    margin-bottom:2rem;
  }

  main {
    min-height: calc(100vh - 227px);

    >*:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  footer {
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
