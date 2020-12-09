import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './sass/main.scss';

import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import listReducer from './store/reducers/productList';
import singleProductReducer from './store/reducers/singleProduct';
import filterReducer from './store/reducers/filters';
import paginationReducer from './store/reducers/pagination';

// Adding Redux Dev Tools for debigging
const compseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  productList: listReducer,
  singleProduct: singleProductReducer,
  filter: filterReducer,
  pagination: paginationReducer
});

// Create the store object with Thunk middleware
const store = createStore(rootReducer, compseEnhancers(applyMiddleware(thunk)));

// Store access is provided to the entire application
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
