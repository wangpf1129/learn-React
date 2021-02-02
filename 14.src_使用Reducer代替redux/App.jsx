import React, { useReducer } from 'react'

import store from './redux/store.js'
import reducer from './redux/reducer'
import Context from './redux/context'

import Users from './components/Users'
import Books from './components/Books'
import Movies from './components/Movies'


function App() {
  // state 读， dispatch 写
  const [state, dispatch] = useReducer(reducer, store)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Users />
      <hr />
      <Books />
      <Movies />
    </Context.Provider>
  )
}

export default App
