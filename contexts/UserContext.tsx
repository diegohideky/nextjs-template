import Router, { useRouter } from 'next/router'
import { createContext, useEffect, useMemo, useState } from 'react'
import authApi from '../api/auth'
import { Toast } from '../components'
import { Pages } from '../enums/pages'
import { TUser } from '../types/users'

const initialValue = {
  user: null,
  setUser: (user: TUser) => {},
  setToken: (token: string) => {},
  getToken: () => {},
}

export const UserContext = createContext(initialValue)

export type UserProviderProps = {
  children: React.ReactNode
}

const noAuthRoutes = ['/tableExample', '/login', '/signup', '/confirmation']

export const UserProvider: React.FC<UserProviderProps> = (props) => {
  const router = useRouter()
  const [user, setUser] = useState<TUser | null>(null)

  const setToken = (token: string) => {
    localStorage.setItem('token', token)
  }

  const getToken = () => {
    return localStorage.getItem('token')
  }

  useEffect(() => {
    if (noAuthRoutes.includes(router.pathname)) {
      return
    }

    const token = getToken()

    if (user && token) {
      console.log({ user })
      return
    }

    if (!user && token) {
      const validateToken = async () => {
        try {
          const payload = await authApi.validate()
          setUser(payload)
        } catch (err) {
          Toast.notify('error', 'Token inválido')
          setToken('')
          Router.push(Pages.LOGIN)
        }
      }

      validateToken()
    } else {
      Router.push(Pages.LOGIN)
    }
  }, [user])

  const value = useMemo(
    () => ({
      user,
      setUser,
      setToken,
      getToken,
    }),
    [user]
  )

  return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
}
