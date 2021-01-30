import React, { Component } from 'react'
// 引入 connect 用于连接UI组件和redux
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'

 class Count extends Component {

  render() {
    return (
      <div>
        <h2>当前求和为：{this.props.count}</h2>
        <select ref={c => this.currentNum = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}> + </button>&nbsp;&nbsp;
        <button onClick={this.decrement}> - </button>&nbsp;&nbsp;
        <button onClick={this.incrementIfOdd}> 当前求和为奇数时 再加 </button>&nbsp;&nbsp;
        <button onClick={this.incrementAsync}> 异步加 </button>&nbsp;&nbsp;
      </div>
    )
  }

  increment = () => {
    const { value } = this.currentNum
    this.props.createIncrementAction(value * 1)
  }
  decrement = () => {
    const { value } = this.currentNum
    this.props.createDecrementAction(value * 1)

  }
  incrementIfOdd = () => {
    const { value } = this.currentNum
    if (this.props.count % 2 !== 0) {
      this.props.createIncrementAsyncAction(value * 1)
    }
  }
  incrementAsync = () => {
    const { value } = this.currentNum
    this.props.createIncrementAsyncAction(value * 1, 500)
  }
}

// 使用connect()()创建关系并暴露一个Count的容器组件
export default connect(
  state => ({ count: state }),
  {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
  }
)(Count)