import React, { createContext, useContext, useState, useEffect } from 'react'

const Context = createContext(null)

function App() {
  const [count, setCount] = useState(0)
  return (
    <Context.Provider value={{ count, setCount }}>
      <div>
        <A />
      </div>
    </Context.Provider>
  )
}

function A() {
  return (
    <div>
      <h2>我是A组件</h2>
      <B />
    </div>
  )
}

function B() {
  const { count, setCount } = useContext(Context)
  const increment = () => {
    setCount(n => n + 1)
  }
  useEffect(() => {
    console.log('第一次渲染之后及之后每次都会执行');
  })
  useEffect(() => {
    console.log("只执行第一次渲染之后");
  }, [])
  useEffect(() => {
    if (count !== 0) {
      console.log('count变化了');
    }
  }, [count])

  return (
    <div>
      <h3>我是B组件</h3>
      <div>count:{count}</div>
      <button onClick={increment}>+1</button>
    </div>
  )
}

export default App001
