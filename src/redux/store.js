import { createStore, applyMiddleware, combineReducers } from 'redux'

// 用于支持异步action
import thunk from 'redux-thunk'

import countReducer from './reducers/count'
import personReducer from './reducers/person'

const allReducers = combineReducers({
  count: countReducer,
  person:personReducer
})



export default createStore(allReducers,applyMiddleware(thunk))