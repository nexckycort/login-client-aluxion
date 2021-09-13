import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Input } from 'infrastructure/views/components/ui'

const Login = (): JSX.Element => {
  return (
    <main className="center">
      <form>
        <h1>Login App</h1>
        <Input placeholder="name@example.com" />
        <Input placeholder="******" />
        <Button type="submit">Log In</Button>
      </form>
      <Link to={'/'}>to Home</Link>
    </main>
  )
}

export default Login
