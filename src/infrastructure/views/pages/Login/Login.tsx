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
        {status === STATUS.ERROR && (
          <div className="alert alert-danger" role="alert">
            {error.message}
          </div>
        )}
        <div className="mb-3">
          <Input {...email} placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <Input {...password} placeholder="******" />
        </div>
        <div className="mb-2">
          <Link to={'/forgot-password'}>Forgot Password?</Link>
        </div>
        <Button type="submit" disabled={status === STATUS.PENDING}>
          Log In
        </Button>
      </form>
      <Link to={'/signup'}>Sign Up</Link>
    </main>
  )
}

export default Login
