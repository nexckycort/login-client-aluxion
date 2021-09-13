import { apiV1 } from 'infrastructure/config/api'
import { SessionDTO } from 'infrastructure/dto/SessionDTO'
import { UserDTO } from 'infrastructure/dto/UserDTO'
import { http } from 'infrastructure/lib'

export const sessionRepository = {
  auth: async (userDTO: UserDTO) => {
    const result = await http.post<SessionDTO>(apiV1.login, {
      body: userDTO
    })

    return result
  },
  forgotPassword: async (email: string) => {
    const result = await http.post<undefined>(apiV1.forgotPassword, {
      body: { email }
    })
    return result
  },
  signup: async (userDTO: UserDTO) => {
    const result = await http.post<undefined>(apiV1.signup, {
      body: userDTO
    })
    return result
  },
  logout: async () => {
    // TODO: request to endpoint to delete session
  }
}
