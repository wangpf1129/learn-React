import React, { Component } from 'react'

import Search from './components/Search'
import List from './components/List'

export class App extends Component {

  state = {
    users: [],
    isFirst: true, // 是否为第一次打开页面
    isLoading: false,  // 标识是否处于加载中
    err: "",  // 存储请求相关的错误信息
  }

  render() {
    return (
      <div className="container">
        <Search updateAPPState={this.updateAPPState} />
        <List {...this.state} />
      </div>
    )
  }

  updateAPPState = (stateObj) => {
    this.setState(stateObj)
  }
}

export default App
