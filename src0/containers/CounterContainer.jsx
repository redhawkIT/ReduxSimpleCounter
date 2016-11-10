import {connect} from 'react-redux'
import Counter from '../components/Counter'
import {onIncrement, onDecrement} from '../actions'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {value: state.value}
}

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onIncrement: () => dispatch(increment()),
//   onDecrement: () => dispatch(decrement())
// })

export default connect(mapStateToProps, {onIncrement, onDecrement})(Counter)
