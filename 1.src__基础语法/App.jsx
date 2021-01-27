import React from 'react';

import "./style.css";

import Son from './Components/Son/Son'
import Count from './Components/Count/Count'
import News from './Components/News/News'


function App() {
  return (
    <div className="App">
      父组件
      <Son messageForSon="我是你的老大" />
      <br />
      <Count name='八嘎' />
      <br />
      <News />
    </div>
  );
}

export default App