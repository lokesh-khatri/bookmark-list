import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { bookmarkApp } from './reducers/index';

const persistConfig = {
  key: 'bookmark-list',
  storage,
};

const persistedReducer = persistReducer(persistConfig, bookmarkApp);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
}