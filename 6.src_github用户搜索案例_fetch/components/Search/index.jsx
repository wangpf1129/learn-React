import React, { Component } from 'react'
import PubSub from 'pubsub-js'


import './index.css'

export class Search extends Component {

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div className="inputText">
          <input ref={c => this.keyCodeElement = c} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.toSearch}>Search</button>
        </div>
      </section>
    )
  }

  toSearch = async () => {
    const { keyCodeElement: { value: path } } = this
    //发送请求前更新List状态
    PubSub.publish('updateState', { isFirst: false, isLoading: true })

    // 使用fetch 发送请求
    try {
      const response = await fetch(`/api1/search/users?q=${path}`)
      const data = await response.json()
      PubSub.publish('updateState', { isLoading: false, users: data.items })
    }
    catch (error) {
      PubSub.publish('updateState', { isLoading: false, err: error.message })
    }
  }
}

export default Search
