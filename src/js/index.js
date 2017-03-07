import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/reducers';
import App from './components/App';
import initialState from './initialState';

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    thunkMiddleware,
  ),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
