import request from '../libs/request'
import { TConfirm, TLogin, TLoginResponse, TSignup, TSignupResponse } from '../types/auth'
import { TUser } from '../types/users'

const login = async (data: TLogin): Promise<TLoginResponse> => {
  return request.post('/auth/login', data)
}

const signup = async (data: TSignup): Promise<TSignupResponse> => {
  return request.post('/auth/signup', data)
}

const confirm = async (data: TConfirm): Promise<boolean> => {
  return request.post('/auth/confirm', data)
}

const validate = async (): Promise<TUser> => {
  return request.post('/auth/validate', {})
}

const authApi = {
  login,
  signup,
  confirm,
  validate,
}

export default authApi
