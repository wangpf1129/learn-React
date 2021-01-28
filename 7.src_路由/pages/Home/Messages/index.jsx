import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { nanoid } from 'nanoid'

import Detail from './Detail'

export class Messages extends Component {

  state = {
    messageArr: [
      { id: nanoid(), title: "消息001", content: "今天天气凉爽" },
      { id: nanoid(), title: "消息002", content: "今天天气炎热" },
      { id: nanoid(), title: "消息003", content: "今天天气严寒" },
    ],
  }

  pushShow = (id, title, content) => {

    // 使用params参数方式传递
    this.props.history.push(`/home/messages/detail/${id}&${title}&${content}`)
    // 使用state参数方式传递
    // this.props.history.push("/home/messages/detail", { id, title, content })
  }
  replaceShow = (id, title, content) => {

    // 使用params参数方式传递
    this.props.history.replace(`/home/messages/detail/${id}&${title}&${content}`)

    // 使用search参数方式传递
    // this.props.history.replace(`/home/messages/detail/?id=${id}&title=${title}&content=${content}`)

    // 使用state参数方式传递
    // this.props.history.replace("/home/messages/detail", { id, title, content })
  }

  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map(item => {
              return <li key={item.id}>
                {/* 传递params参数 */}
                <Link to={`/home/messages/detail/${item.id}&${item.title}&${item.content}`} >{item.title}</Link>

                {/* 传递search参数（query参数） */}
                {/* <Link to={`/home/messages/detail/?id=${item.id}&title=${item.title}&content=${item.content}`} >{item.title}</Link> */}

                {/* 传递state参数 */}
                {/* <Link to={{ pathname: "/home/messages/detail", state: { id: item.id, title: item.title, content: item.content } }} >{item.title}</Link> */}

                <button onClick={() => { this.pushShow(item.id, item.title, item.content) }}>push方式查看</button>
                <button onClick={() => { this.replaceShow(item.id, item.title, item.content) }}>replace方式查看</button>
              </li>
            })
          }
        </ul>
        <Switch>
          {/* 接收params参数 */}
          <Route path="/home/messages/detail/:id&:title&:content" component={Detail} />

          {/* 接收search参数（query参数）无需声明接收 */}
          {/* <Route path="/home/messages/detail" component={Detail} /> */}

          {/* 接收state参数（query参数）无需声明接收 */}
          {/* <Route path="/home/messages/detail" component={Detail} /> */}
        </Switch>
      </div>
    )
  }
}

export default Messages
