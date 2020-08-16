import React from 'react';
import InputPanel from './components/InputPanel/InputPanel';
import styled from 'styled-components';

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
    </StyledApp>
  );
}

export default App;
