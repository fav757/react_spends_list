import React from 'react';
import styled from 'styled-components';
import InputPanel from './components/InputPanel/InputPanel';
import DataSector from './components/DataSector/DataSector';
import GraphControlls from './components/GraphControlls/GraphControlls';

const StyledApp = styled.div`
  header {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  main {
    min-height: calc(100vh - 227px);
    padding-bottom: 2rem;

    > *:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  footer {
    text-align: center;

    a {
      color: #c8c8c8;
    }
  }

  @media screen and (max-width: 576px) {
    main {
      min-height: calc(100vh - 128px);
    }
  }
`;

function App() {
  return (
    <StyledApp>
      <header>React spends list</header>
      <main>
        <InputPanel />
        <DataSector />
        <GraphControlls />
      </main>
      <footer>
        <a href='https://fav757.github.io/'>Visit my resume website</a>
      </footer>
    </StyledApp>
  );
}

export default App;
