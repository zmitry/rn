
import { AsyncStorage } from 'react-native';
import createLogger from 'redux-logger';
import devTools from 'remote-redux-devtools';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducer from './reducers';


export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
    applyMiddleware(thunk, promiseMiddleware, createLogger()),
    devTools({
      realtime: true,
    }),
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
