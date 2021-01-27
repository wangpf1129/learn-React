
import React, { Component } from 'react'

import './index.css'

export class Item extends Component {

  state = {
    mouseState: false
  }
  render() {
    const { id, name, done } = this.props
    const { mouseState } = this.state
    return (
      <li
        onMouseEnter={this.handleMouseState(true)}
        onMouseLeave={this.handleMouseState(false)}
        style={{ backgroundColor: mouseState ? "#ddd" : "#fff" }}
      >
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouseState ? 'block' : 'none' }}
          onClick={this.deleteTodo(id)}
        >删除</button>
      </li>
    )
  }


  // 控制鼠标进出该任务时的样式
  handleMouseState = (flag) => {
    return () => {
      this.setState({
        mouseState: flag
      })
    }
  }

  // 处理是否被选中
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodoDone(id, event.target.checked)
    }
  }

  // 找出任务id并交给App组件删除它
  deleteTodo = (id) => {
    return () => {
      this.props.deleteTodo(id)
    }
  }
}

export default Item
