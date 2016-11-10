// Actions describe the fact that something happened, but don't specify how
// the application's state changes in response. This is the job of a reducer.

// pure function that takes the previous state and an action, and returns the next state
// (previousState, action) => newState
import {INCREMENT, DECREMENT} from '../constants'

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}
