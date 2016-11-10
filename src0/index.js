import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import CounterContainer from './containers/CounterContainer'
import reducer from './reducers'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, reduxDevTools)

render(
  <Provider store={store}>
    <CounterContainer/>
  </Provider>,
  document.getElementById('root')
)
