import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { loadState } from '../localStorage';

import reducers from '../reducers';

const persistedState = loadState();

export default createStore(
  reducers,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);
