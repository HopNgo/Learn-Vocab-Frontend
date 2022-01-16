import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import VocabsProvider from './store/VocabsProvider';

ReactDOM.render(
  <React.StrictMode>
    <VocabsProvider>
      <Router>
        <App />
      </Router>
    </VocabsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

