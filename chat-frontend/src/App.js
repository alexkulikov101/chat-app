import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import './App.scss'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Chat from './components/Chat/Chat'

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Chat} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route render={() => <h1>404 page not found</h1>} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
