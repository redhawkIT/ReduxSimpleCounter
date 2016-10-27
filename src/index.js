import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import {connect, Provider} from 'react-redux'

const logger = createLogger()

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    default:
      return state
  }
}

const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger))

class App extends Component {
  render() {
    let {number, increase, decrease} = this.props
    return (
      <div>
        <div>{number}</div>
        <button onClick={e => increase()}>+</button>
        <button onClick={e => decrease()}>-</button>
      </div>
    )
  }
}

let mapStateToProps = state => ({number: state})

// let mapDispatchToProps = dispatch => ({
//   increase: () => dispatch({type: 'INCREASE'}),
//   decrease: () => dispatch({type: 'DECREASE'})
// })

function increase() {
  return {
    type:  'INCREASE'
  }
}
function decrease() {
  return {
    type:  'DECREASE'
  }
}


const SmartApp = connect(mapStateToProps, {increase, decrease})(App)

ReactDOM.render(
  <Provider store={store}>
    <SmartApp/>
  </Provider>,
 document.getElementById('root')
)
