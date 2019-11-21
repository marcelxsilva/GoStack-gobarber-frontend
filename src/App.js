import React from 'react';
import { Router } from 'react-router-dom'
import Routes from './routes';
import { Provider, } from 'react-redux';
import history from './services/history';
import './config/ReactotronConfig';

import GlobalStyles from './styles/global';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </Provider>
  )
}
export default App;
