import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useAuth, useField, useAsync, useRouter } from 'infrastructure/views/hooks'
import { Alert, Button, Input } from 'infrastructure/views/components/ui'
import { STATUS } from 'infrastructure/views/hooks/useAsync'
import { sessionService } from 'domain/services/sessionService'

const Signup = (): JSX.Element => {
  const { auth } = useAuth()
  const { authenticated } = auth

  const router = useRouter()

  const name = useField({ type: 'text' })
  const email = useField({ type: 'email' })
  const password = useField({ type: 'password' })

  const signupAsync = async () => {
    const { error, response } = await sessionService.signup({
      name: name.value,
      email: email.value,
      password: password.value
    })
    if (error) {
      throw new Error(response.message)
    }
    return response
  }

  const { execute, status, error, value } = useAsync<{ message: string }>(signupAsync, false)

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
        <h1>Signup</h1>
        {status === STATUS.SUCCESS && <Alert type="success">{value.message}</Alert>}
        {status === STATUS.ERROR && <Alert type="danger">{error.message}</Alert>}
        <div className="mb-3">
          <Input {...name} required placeholder="name" />
        </div>
        <div className="mb-3">
          <Input {...email} required placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <Input {...password} required placeholder="******" />
        </div>

        <Button type="submit" disabled={status === STATUS.PENDING}>
          Sign Up
        </Button>
      </form>
      <Link to={'/login'}>Log In</Link>
    </main>
  )
}

export default Signup
