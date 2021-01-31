import { ADD_PERSON } from '../constant'

function personReducer(preState = [], action) {
  const { type, data } = action
  const typeMap = {
    [ADD_PERSON] : [data,...preState]
  }
  if (type in typeMap) {
    return typeMap[type]
  } else {
    return preState
   }
}


export default personReducer