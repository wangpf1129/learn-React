import React, { Component } from 'react'
import axios from 'axios'/
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

    axios.get(`/api1/search/users?q=${path}`)
      .then(
        response => {
          //发送请求成功后更新List状态
          PubSub.publish('updateState', { isLoading: false, users: response.data.items })
        },
        error => {
          //发送请求错误后更新List状态
          PubSub.publish('updateState', { isLoading: false, err: error.message })
        }
      )
  }
}

export default Search
