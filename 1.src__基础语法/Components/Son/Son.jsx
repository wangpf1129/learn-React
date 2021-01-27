import React, { Component } from 'react';
import Grandson from './Grandson/Grandson'

class Son extends Component {
  constructor() {
    super()
    this.state = {
      n: 0
    }
  }

  render() {
    return (
      <div className="Son">
        子组件
        <span> n: {this.state.n} </span>
        <button onClick={this.add}> +1</button>
        <p>我是子组件，父组件对我说：{this.props.messageForSon}</p>
        <Grandson messageForGrandson="我是你的老大,你是我老大的孙子" />
      </div>
    )
  }

  add = () => {
    this.setState(state => {
      const n = state.n + 1;
      return { n }
    })
  }

}



export default Son
