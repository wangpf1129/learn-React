import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import Messages from './Messages'
import News from './News'
import MyNavLink from '../../components/MyNavLink'

export class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/messages">Message</MyNavLink>
            </li>
          </ul>
          <ul>
            <Switch>
              <Route path="/home/news" component={News} />
              <Route path="/home/messages" component={Messages} />
              <Redirect to="/home/news" />
            </Switch>
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
