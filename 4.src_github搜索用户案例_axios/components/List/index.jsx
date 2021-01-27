import React, { Component } from 'react'
import './index.css'

export class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字，搜索用户</h2> :
            isLoading ? <h2>正在加载中.....</h2> :
              err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                users.map((user) => {
                  return (
                    <div className="card">
                      <a href={user.html_url} target="_blank" rel="noreferrer">
                        <img alt="head_portrait" src={user.avatar_url} style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{user.login}</p>
                    </div>
                  )
                })}
      </div>
    )
  }
}


export default List
