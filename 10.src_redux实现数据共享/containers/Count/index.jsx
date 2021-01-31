import React, { Component } from 'react'
// 引入 connect 用于连接UI组件和redux
import { connect } from 'react-redux'
import {
  increment,
  decrement,
  incrementAsync
} from '../../redux/actions/count'

class Count extends Component {

  render() {
    return (
      <div>
        <h2>我是Count组件，下方组件的总人数为：{this.props.personLen}</h2>
        <h4>当前求和为：{this.props.count}</h4>
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
    this.props.increment(value * 1)
  }
  decrement = () => {
    const { value } = this.currentNum
    this.props.decrement(value * 1)

  }
  incrementIfOdd = () => {
    const { value } = this.currentNum
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }
  incrementAsync = () => {
    const { value } = this.currentNum
    this.props.incrementAsync(value * 1, 500)
  }
}

// 使用connect()()创建关系并暴露一个Count的容器组件
export default connect(
  state => ({
    count: state.count,
    personLen: state.person.length
  }),
  {
    increment,
    decrement,
    incrementAsync
  }
)(Count)