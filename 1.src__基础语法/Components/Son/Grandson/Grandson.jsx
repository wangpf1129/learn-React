import React from 'react';

const Grandson = (props) => {
  const [n, setN] = React.useState(0)
  return (
    <div className="Grandson">
      孙组件
      <span> n : {n} </span>
      <button onClick={() => { setN(n + 1) }}> +1</button>
      <p>我是孙组件，子组件对我说：{props.messageForGrandson}</p>
    </div>
  )
}

export default Grandson


