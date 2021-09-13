import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LoginView from 'infrastructure/views/pages/Login'
import HomeView from 'infrastructure/views/pages/Home'
import ForgotPasswordView from 'infrastructure/views/pages/ForgotPassword'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/forgot-password" exact component={ForgotPasswordView} />
        <Route path="/login" exact component={LoginView} />
      </Switch>
    </Router>
  )
}

export default App
