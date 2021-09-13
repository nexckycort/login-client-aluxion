import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LoginView from 'infrastructure/views/pages/Login'
import HomeView from 'infrastructure/views/pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginView} />
        <Route path="/" exact component={HomeView} />
      </Switch>
    </Router>
  )
}

export default App
