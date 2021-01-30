import { createStore,applyMiddleware } from 'redux'

import countReducer from './count_reducer'

// 用于支持异步action
import thunk from 'redux-thunk'

export default createStore(countReducer,applyMiddleware(thunk))