// Actions are payloads of information that send data from your application to your store.
import {INCREMENT, DECREMENT} from '../constants'

export const onIncrement = () => ({type: INCREMENT})
export const onDecrement = () => ({type: DECREMENT})
