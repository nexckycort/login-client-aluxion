import React from 'react'

import { useAuth } from 'infrastructure/views/hooks'
import { Button } from 'infrastructure/views/components/ui'

const Home: React.FC = () => {
  const { auth, logout } = useAuth()
  const { user } = auth

  return (
    <div className="center">
      <h1>Hello {user.name}</h1>
      <Button type="button" onClick={async () => await logout()}>
        Logout
      </Button>
    </div>
  )
}

export default Home
