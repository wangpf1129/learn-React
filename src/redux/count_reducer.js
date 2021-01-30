
function countReducer(preState =0, action) {
  const { type, data } = action
  const typeMap = {
    "increment": preState + data,
    "decrement": preState - data
  }
  if (type in typeMap) {
    return typeMap[type]
  } else { 
    return preState
  }
}
 

export default countReducer