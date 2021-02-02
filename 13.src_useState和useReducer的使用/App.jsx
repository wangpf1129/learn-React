import React, { useState, useReducer } from 'react'

function App() {
  const [user, setUser] = useState({ name: "Wangpf", age: 18 })
  const changeState = () => {
    setUser({
      ...user,
      name: "Mark"

    })
  }
  return (
    <div>
      <h2>名字：{user.name}</h2>
      <h2>年龄：{user.age}</h2>
      <button onClick={changeState}>改变</button>
      <hr />
      <A />
    </div>
  )

}


const initialState = { count: 0 }
const reducer = (state, action) => {
  const { type, data } = action
  if (type === 'increment') {
    return { count: state.count + data }
  } else if (type === 'decrement') {
    return { count: state.count - data }
  } else {
    throw new Error('unknown type')
  }
}

function A() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { count } = state

  const increment = () => {
    dispatch({ type: "increment", data: 1 })
  }
  const decrement = () => {
    dispatch({ type: "decrement", data: 2 })
  }

  return (
    <div>
      <h2>我是A组件</h2>
      <h4>count:{count}</h4>
      <button onClick={increment}>加</button>
      <button onClick={decrement}>减</button>
    </div>
  )
}
export default App

