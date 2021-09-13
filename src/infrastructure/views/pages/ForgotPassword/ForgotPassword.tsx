import React from 'react'
import { Link } from 'react-router-dom'

import { Alert, Button, Input } from 'infrastructure/views/components/ui'
import { useAsync, useField } from 'infrastructure/views/hooks'
import { STATUS } from 'infrastructure/views/hooks/useAsync'
import { sessionService } from 'domain/services/sessionService'

const ForgotPassword: React.FC = () => {
  const email = useField({ type: 'email' })

  const forgotPasswordAsync = async () => {
    const { error, response } = await sessionService.forgotPassword(email.value)
    if (error) {
      throw new Error(response.message)
    }
    return response
  }

  const { execute, status, error, value } = useAsync<{ message: string }>(forgotPasswordAsync, false)

  const handleOnSubmit = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault()
    execute()
  }

  return (
    <div className="center">
      <form onSubmit={handleOnSubmit}>
        <h1>Reset your password</h1>
        {status === STATUS.SUCCESS && <Alert type="success">{value.message}</Alert>}
        {status === STATUS.ERROR && <Alert type="danger">{error.message}</Alert>}
        <div className="mb-3">
          <Input {...email} required placeholder="name@example.com" />
        </div>
        <div className="mb-2">
          <Link to={'/login'}>I already remembered, go back to Login</Link>
        </div>
        <Button type="submit" disabled={status === STATUS.PENDING}>
          Reset password
        </Button>
      </form>
    </div>
  )
}

export default ForgotPassword
