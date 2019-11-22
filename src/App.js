import React from 'react';
import { Router } from 'react-router-dom'
import Routes from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, } from 'react-redux';
import history from './services/history';
import './config/ReactotronConfig';
import { ToastContainer } from 'react-toastify'
import GlobalStyles from './styles/global';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
        </Router>
      </PersistGate>
      <ToastContainer autoClose={3000} />
    </Provider>
  )
}
export default App;
