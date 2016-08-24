import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router'
import Main from '../app/components/Main.jsx'
import Home from '../app/components/Home.jsx'
import Help from '../app/components/Help.jsx'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='help' component={Help} />3

      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
)
