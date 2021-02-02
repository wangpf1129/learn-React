import React, { useRef, forwardRef, useEffect } from 'react'

function App() {
  const btnRef = useRef(null)
  useEffect(() => {
    console.log(btnRef.current);
  }, [])

  return (
    <div>
      <Button ref={btnRef} />
    </div>
  )
}

const Button = forwardRef((props, ref) => {

  return (
    <div>
      <button ref={ref} {...props}>按钮</button>
    </div>
  )
})


export default App
