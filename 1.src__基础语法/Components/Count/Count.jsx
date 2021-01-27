import React, { Component } from 'react';

class Count extends Component {
  constructor() {
    super()
    console.log('constructor--count组件构造器');
    this.state = {
      count: 0,
      message: '我想要吃的'
    }
  }



  //组件挂载完毕后
  componentDidMount() {
    console.log('componentDidMount--count组件挂载完毕后');
  }

  // 
  static getDerivedStateFromProps(state, props) {
    console.log('getDerivedStateFromProps--count', state, props)
    return null
  }


  // 控制组件更新的“阀门”
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate--count组件是否应该被更新');
    return true
  }
  // 在更新之前获取快照
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate--count')
    return 'Wangpf'
  }
  //组件更新完毕后
  componentDidUpdate(preProps, preState, snapShotValue) {
    console.log('componentDidUpdate--count组件更新完毕后', preProps, preState, snapShotValue);
  }


  render() {
    console.log('render--count组件渲染');
    const { count } = this.state
    return (
      <div className="count">
        <h2>{count}</h2>
        <button onClick={this.add}>+1</button>
        <button onClick={this.force}>强制更新，不改变任何数据状态</button>
        <br />
        <div>
          <h3>我是Count组件</h3>
          <button onClick={this.changeMessage}>更换子组件信息</button>
          <CountSon message={this.state.message} />
        </div>
      </div>
    )
  }

  add = () => {
    const { count } = this.state
    this.setState({
      count: count + 1
    })
  }

  force = () => {
    this.forceUpdate()
  }

  changeMessage = () => {
    // const { message } = this.state
    this.setState({
      message: "我想要喝的"
    })
  }

}


class CountSon extends Component {


  render() {
    return (
      <div>
        <h3>我是Count的子组件</h3>
        <span>我收到父组件的信息：{this.props.message}</span>
      </div>
    )
  }
}

export default Count 