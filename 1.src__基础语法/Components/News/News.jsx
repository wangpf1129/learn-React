import React, { Component } from 'react';

import './News.css'

class News extends Component {

  state = {
    newsArr: []
  }

  componentDidMount() {
    setInterval(() => {
      const { newsArr } = this.state
      const news = `新闻${newsArr.length + 1}`

      this.setState({
        newsArr: [news, ...newsArr]
      })
    }, 1000)
  }

  getSnapshotBeforeUpdate() {
    return this.listHeight.scrollHeight
  }

  componentDidUpdate(preProps, preState, height) {
    // 用更新之后的高度 减去 更新之前的高度 再 += 给 更新之后的所在的值 
    // 这样旧能一直处于最底下了
    this.listHeight.scrollTop += this.listHeight.scrollHeight - height
  }

  render() {
    const { newsArr } = this.state
    return (
      <div className="list" ref={c => this.listHeight = c}>
        {newsArr.map((item, index) => {
          return <div key={index} className='news'>{item}</div>
        })}
      </div>
    )
  }
}


export default News