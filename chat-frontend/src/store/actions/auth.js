import { LOGIN, REGISTER } from '../types'
import AuthService from '../../services/authService'

export const login = (params, history) => (dispatch) => {
  return AuthService.login(params)
    .then((data) => {
      console.log(data)
      dispatch({ type: LOGIN, payload: data })
      history.push('/')
    })
    .catch((err) => {
      console.log(err)
    })
}

export const register = (params, history) => (dispatch) => {
  return AuthService.register(params)
    .then((data) => {
      console.log(data)
      dispatch({ type: REGISTER, payload: data })
      history.push('/')
    })
    .catch((err) => {
      console.log(err)
    })
}
