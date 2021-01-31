import {combineReducers } from 'redux'

import count from './count'
import person from './person'

const allReducers = combineReducers({
  count,
  person
})

export default allReducers