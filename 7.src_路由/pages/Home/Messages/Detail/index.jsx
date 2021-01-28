import React, { Component } from 'react'

// import qs from 'querystring'


export class Detail extends Component {
  render() {
    // params 传参
    const { id, title, content } = this.props.match.params

    // search 传参
    // const { id, title, content } = qs.parse(this.props.location.search.slice(1))

    // state 传参
    // const { id, title, content } = this.props.location.state || {}
    return (
      <div>
        <hr />
        <ul>
          <li>ID:{id}</li>
          <li>Title:{title}</li>
          <li>Content:{content}</li>
        </ul>
      </div>
    )
  }
}

export default Detail
