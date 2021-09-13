import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useAuth, useField, useAsync, useRouter } from 'infrastructure/views/hooks'
import { Button, Input } from 'infrastructure/views/components/ui'
import { STATUS } from 'infrastructure/views/hooks/useAsync'

const Login = (): JSX.Element => {
  const { auth, login } = useAuth()
  const { authenticated } = auth

  const router = useRouter()

  const email = useField({ type: 'email' })
  const password = useField({ type: 'password' })

  const loginAsync = async () => {
    const { error, response } = await login({
      email: email.value,
      password: password.value
    })
    if (error) {
      throw new Error(response.message)
    }
    return response
  }

  const { execute, status, error } = useAsync(loginAsync, false)

  const handleOnSubmit = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault()
    execute()
  }

  useEffect(() => {
    if (authenticated) {
      router.push('/')
    }
  }, [status])

  return (
    <main className="center">
      <form onSubmit={handleOnSubmit}>
        <h1>Login App</h1>
        <Input {...email} placeholder="name@example.com" />
        <Input {...password} placeholder="******" />
        <Link to={'/forgot-password'}>Forgot Password?</Link>
        <Button type="submit" disabled={status === STATUS.PENDING}>
          Log In
        </Button>
        {status === STATUS.ERROR && <span>{error.message}</span>}
      </form>
      <Link to={'/signup'}>Sign Up</Link>
    </main>
  )
}

export default Login
