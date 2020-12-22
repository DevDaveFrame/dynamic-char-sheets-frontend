import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer';

const appReducer = combineReducers({
  nothing: [],
  user: userReducer
  // projects: projectReducer,
  // sessions: sessionReducer
})
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

const store = createStore(
  rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
