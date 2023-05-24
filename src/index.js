import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import Header from './components/header'
import Filter from './components/Filter'
import Productos from './components/Productos/productos'

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/productos' component={Productos} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
