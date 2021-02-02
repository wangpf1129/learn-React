import React, { useState, memo, useMemo } from 'react'

function App() {
  const [n, setN] = useState(0)
  const [m, setM] = useState(0)
  const updateN = () => {
    setN(n => n + 1)
  }
  const updateM = () => {
    setM(m => m + 1)
  }
  const changeA = useMemo(() => {
    return m => console.log(m)
  }, [])

  // const changeA = useCallback(m => console.log(m), [])
  return (
    <div>
      <button onClick={updateN}>update n {n}</button>
      <button onClick={updateM}>update m {m}</button>
      <A data={m} onClick={changeA} />
    </div>
  )
}

const A = memo((props) => {
  console.log('A组件执行了');
  return <div onClick={props.changeA}>A组件：{props.data}</div>
})

export default App
