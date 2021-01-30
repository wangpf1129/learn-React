import React, { Component } from 'react'


import store from '../../redux/store'
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'

export class Count extends Component {


  render() {

    return (
      <div>
        <h2>当前求和为：{store.getState()}</h2>
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
    store.dispatch(createIncrementAction(value * 1))
  }
  decrement = () => {
    const { value } = this.currentNum
    store.dispatch(createDecrementAction(value * 1))
  }
  incrementIfOdd = () => {
    const count = store.getState()
    const { value } = this.currentNum
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1))
    }
  }
  incrementAsync = () => {
    const { value } = this.currentNum
    setTimeout(() => {
      store.dispatch(createIncrementAction(value * 1))
    }, 500)
  }

}

export default Count
