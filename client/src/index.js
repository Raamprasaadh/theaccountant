import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';

const MIDDLEWARE = applyMiddleware(thunk);

const STORE = createStore(Reducers,MIDDLEWARE,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={STORE}>
   <App />
   </Provider>,
  document.getElementById('root')
);
reportWebVitals();
