import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

import store from './redux/store/store';

import './index.css';

import * as serviceWorker from './serviceWorker';

/**
 * Provider - main wrapper for the app; provides with store functionallity
 */

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
