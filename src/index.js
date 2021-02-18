import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './root.css';
import App from './components/App/App';
import { GlobalContext } from './GlobalState';

ReactDOM.render(
  <GlobalContext>
    <App />
  </GlobalContext>,
  document.getElementById('root')
);
