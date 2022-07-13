import { TUser } from './users'

export type TLogin = {
  email: string
  password: string
}

export type TLoginResponse = {
  token: string
  user: TUser
}

export type TSignup = {
  name: string
  username: string
  email: string
  password: string
  password_confirmation: string
}

export type TSignupResponse = {
  payload: string
}

export type TConfirm = {
  token: string
}
