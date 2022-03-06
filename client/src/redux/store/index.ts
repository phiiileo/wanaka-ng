import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import reducers from './../reducers';
import { ICustomData } from '../../interfaces';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootPersistConfig = {
  key: 'culconnect',
  storage,
  blacklist: [],
};
let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;
}
const persistedReducer = persistReducer(rootPersistConfig, reducers);

const storeMain = (): ICustomData => {
  // localStorage.clear();
  const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(ReduxThunk)));
  const persistor = persistStore(store);
  return { store, persistor };
};

export default storeMain;
