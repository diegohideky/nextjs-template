import { TRole } from './roles'

export type TUser = {
  id: string
  roleId: string
  name: string
  username: string
  email: string
  confirmed: boolean
  createdAt: Date
  updatedAt: Date
  role: TRole
}
