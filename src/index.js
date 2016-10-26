import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'

let reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    default:
      return state
  }
}

let store = createStore(reducer)

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

let mapDispatchToProps = dispatch => ({
  increase: () => dispatch({type: 'INCREASE'}),
  decrease: () => dispatch({type: 'DECREASE'})
})

const SmartApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <SmartApp/>
  </Provider>,
 document.getElementById('root')
)
