import React, { Component } from 'react'

export class News extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/home/messages')
    }, 3000)
  }

  render() {
    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    )
  }
}

export default News
