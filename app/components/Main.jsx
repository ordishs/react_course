import React from 'react'
import ReactDOM from 'react-dom'

import Home from './Home.jsx'

class Main extends React.Component {
  render () {
    return (
      <Home />
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'))
