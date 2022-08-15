// React Import
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './css/index.css';

// Component
import App from './App';

// Context Stuff Import
import { DataLayer } from './API/DataLayer';
import reducer, { initialState } from './API/reducer';
// import * as serviceWorker from './serviceWorker';

// Main
ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();
