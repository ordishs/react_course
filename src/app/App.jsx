import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router'
import Navigation from '../app/components/Navigation.jsx'
import MessageContainer from '../app/components/MessageContainer.jsx'
import Help from '../app/components/Help.jsx'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Navigation}>
      <Route path='help' component={Help} />3

      <IndexRoute component={MessageContainer} />
    </Route>
  </Router>,
  document.getElementById('app')
)
