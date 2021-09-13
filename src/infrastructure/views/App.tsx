import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LoginView from 'infrastructure/views/pages/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginView} />
      </Switch>
    </Router>
  )
}

export default App
