import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import './global.css';
import { HashRouter } from 'react-router';
import { DataContext } from './context/DataContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <DataContext>
        <App />
      </DataContext>
    </HashRouter>
  </StrictMode>
);
