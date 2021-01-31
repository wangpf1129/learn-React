import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'

const About = lazy(() => import('./pages/About'))
const Home = lazy(() => import('./pages/Home'))

export class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink activeClassName="active" className="list-group-item" to="/home">Home</NavLink>
              <NavLink activeClassName="active" className="list-group-item" to="/about">About</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<h1>Loading...</h1>}>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Redirect to="/home" />
                  </Switch>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
