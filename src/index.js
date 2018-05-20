import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import { Provider } from 'react-redux'

import App from './App';
import { bookmarks } from "./reducers/bookmarks";

const store = createStore(bookmarks);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
