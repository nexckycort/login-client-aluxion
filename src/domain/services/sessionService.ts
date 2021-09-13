import { sessionRepository } from 'infrastructure/repositories/sessionRepository'
import { UserDTO } from 'infrastructure/dto/UserDTO'

export const sessionService = {
  auth: async (userDTO: UserDTO) => {
    const result = await sessionRepository.auth(userDTO)
    return result
  },
  logout: async () => {
    await sessionRepository.logout()
  }
}
