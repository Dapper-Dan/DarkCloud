import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app.jsx';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();
const Root = ({ store }) => (
  <Provider store={store}>
    
      <App />
    
  </Provider>
);

export default Root;
  