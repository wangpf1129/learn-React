import React, { Component } from 'react'

import axios from 'axios'

export class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.getStudentsData}>点击获取学生数据</button>
        <button onClick={this.getCarsData}>点击获取汽车数据</button>

      </div>
    )
  }

  getStudentsData = () => {
    axios.get('http://localhost:3000/api1/students')
      .then((response) => {
        console.log('成功', response.data);
      }, (error) => {
        console.log('失败', error);
      })
  }

  getCarsData = () => {
    axios.get('http://localhost:3000/api2/cars')
      .then((response) => {
        console.log('成功', response.data);
      }, (error) => {
        console.log('失败', error);
      })
  }
}


export default App
