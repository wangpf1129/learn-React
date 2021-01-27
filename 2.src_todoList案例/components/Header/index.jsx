import React, { Component } from 'react'
import { nanoid } from 'nanoid'


import './index.css'

export class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }

  handleKeyUp = (event) => {
    const { target, keyCode } = event
    if (keyCode !== 13) { return }
    if (target.value.trim() === '') {
      return alert('输入内容不能为空')
    }
    const todoObj = { id: nanoid(), name: target.value, done: false }
    this.props.addTodo(todoObj)

    target.value = ''
  }
}

export default Header
