import React, { Component } from 'react'


import Item from '../Item'
import './index.css'

export class List extends Component {
  render() {
    const { todos, updateTodoDone, deleteTodo } = this.props

    return (
      <ul className="todo-main">
        {
          todos.map((todo) => {
            return <Item key={todo.id} {...todo} updateTodoDone={updateTodoDone} deleteTodo={deleteTodo} />
          })
        }
      </ul>
    )
  }
}

export default List
