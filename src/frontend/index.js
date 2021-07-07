import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { createBrowserHistory } from 'history' // creamos el historial
import { Router } from 'react-router'; // importamos o instalamos como depProducción

import reducer from './reducer'
import App from './routes/App'
import initialState from './initialState'

const history = createBrowserHistory();

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)