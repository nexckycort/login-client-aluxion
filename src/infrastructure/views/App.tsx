import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LoginView from 'infrastructure/views/pages/Login'
import HomeView from 'infrastructure/views/pages/Home'
import ForgotPasswordView from 'infrastructure/views/pages/ForgotPassword'
import { PrivateRoute } from 'infrastructure/views/components/auth'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={HomeView} />
        <Route path="/forgot-password" exact component={ForgotPasswordView} />
        <Route path="/login" exact component={LoginView} />
      </Switch>
    </Router>
  )
}

export default App
