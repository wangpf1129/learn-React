import React, { Component } from 'react'


import './index.css'

export class Footer extends Component {

  render() {
    const { todos } = this.props

    const totalCount = todos.length || 0

    const doneCount = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"
            checked={totalCount === doneCount && totalCount !== 0 ? true : false}
            onChange={this.handleCheckAll()} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{totalCount}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDoneTodo}>清除已完成任务</button>
      </div>
    )
  }

  handleCheckAll = () => {
    return (event) => {
      this.props.checkedALL(event.target.checked)
    }
  }

  handleClearAllDoneTodo = () => {
    this.props.deleteDoneTodo()
  }

}

export default Footer
