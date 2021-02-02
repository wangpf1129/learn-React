import React, { useContext } from 'react'
import ReactDOM from 'react-dom'

const CountContext = React.createContext(null)


function App() {
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState('朱元璋')
  const myRef = React.useRef()

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])


  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <h2>当前数值为:{count}</h2>
        <h2>名字：{name}</h2>
        <input type="text" ref={myRef} />
        <button onClick={increment}>点我加1</button>
        <button onClick={changeName}>点我改变名字</button>
        <button onClick={unmount}>卸载组件</button>
        <button onClick={show}>显示数据</button>
        <B />
      </CountContext.Provider>
    </div>
  )

  function increment() {
    setCount(count + 1)
  }
  function changeName() {
    setName('朱隆基')
  }
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  function show() {
    console.log(myRef.current.value);
  }
}



function B() {
  return (
    <div>
      <h2>我是B组件</h2>
      <C />
    </div>
  )
}

function C() {
  const { count, setCount } = useContext(CountContext)
  return (
    <div>
      <h2>我是C组件, 我得到的count：{count}</h2>
      <button onClick={() => { setCount(count => count + 1) }}>+1</button>
    </div>
  )
}

export default App

