import { apiUrlV1 } from './environment'

export const apiV1 = {
  login: [apiUrlV1, 'login'].join('/'),
  forgotPassword: [apiUrlV1, 'restore-password'].join('/')
}
