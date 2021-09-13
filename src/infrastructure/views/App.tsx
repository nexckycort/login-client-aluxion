import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomeView from 'infrastructure/views/pages/Home'
import LoginView from 'infrastructure/views/pages/Login'
import ForgotPasswordView from 'infrastructure/views/pages/ForgotPassword'
import SignupView from 'infrastructure/views/pages/Signup'

import { PrivateRoute } from 'infrastructure/views/components/auth'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={HomeView} />
        <Route path="/login" exact component={LoginView} />
        <Route path="/forgot-password" exact component={ForgotPasswordView} />
        <Route path="/signup" exact component={SignupView} />
      </Switch>
    </Router>
  )
}

export default App
