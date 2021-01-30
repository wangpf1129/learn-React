
import { INCREMENT, DECREMENT } from './constant'

function countReducer(preState =0, action) {
  const { type, data } = action
  const typeMap = {
    [INCREMENT]: preState + data,
    [DECREMENT]: preState - data
  }
  if (type in typeMap) {
    return typeMap[type]
  } else { 
    return preState
  }
}
 

export default countReducer