import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import rootReducer from './reducers';

// @ts-ignore
export type RootState = ReturnType<any>;

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
