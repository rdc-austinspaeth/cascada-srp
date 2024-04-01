import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';

import rootReducer from './reducers';

const initStore = (initialState: any) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

export const initializeStore = (preloadedState: any) => {
  let store;

  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...preloadedState,
    });

    store = undefined;
  }

  if (typeof window === 'undefined') return _store;

  if (!store) store = _store;

  return _store;
};

export const useStore = (initialState: any) => {
  const store = initializeStore(initialState);

  return store;
};
