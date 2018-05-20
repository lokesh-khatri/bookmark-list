import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';
import configureStore from './configureStore';


ReactDOM.render(
  <Provider store={configureStore().store}>
    <PersistGate loading={null} persistor={configureStore().persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
