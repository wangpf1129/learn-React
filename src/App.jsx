
import React, { Component } from 'react'
// import { nanoid } from 'nanoid'


import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'


import './App.css'
export class App extends Component {


  state = {
    todos: JSON.parse(window.localStorage.getItem('todos') || '[]'),
  }

  render() {
    const { todos } = this.state

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodoDone={this.updateTodoDone} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkedALL={this.checkedALL} deleteDoneTodo={this.deleteDoneTodo} />
        </div>
      </div>
    )
  }




  // 将修改后的任务数据  存到本地以及state中
  saveData(newTodos) {
    window.localStorage.setItem('todos', JSON.stringify(newTodos))
    this.setState({
      todos: JSON.parse(window.localStorage.getItem('todos'))
    })
  }

  // 添加任务
  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.saveData(newTodos)
  }


  // 更新任务状态
  updateTodoDone = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done }
      } else {
        return todo
      }
    })
    this.saveData(newTodos)
  }

  //删除任务
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    this.saveData(newTodos)

  }

  // 控制全选状态
  checkedALL = (done) => {
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      return { ...todo, done }
    })
    this.saveData(newTodos)

  }

  // 删除已完成的任务
  deleteDoneTodo = () => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => {
      return !todo.done
    })
    this.saveData(newTodos)

  }

}

export default App
