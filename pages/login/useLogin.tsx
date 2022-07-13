import Router from 'next/router'
import { useContext, useState } from 'react'
import { TLogin } from '../../types/auth'
import authApi from '../../api/auth'
import { UserContext } from '../../contexts/UserContext'
import { Pages } from '../../enums/pages'

const useLogin = () => {
  const { setToken, setUser } = useContext(UserContext)

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (values: TLogin) => {
    setIsLoading(true)
    try {
      const { token, user } = await authApi.login(values)
      setToken(token)
      setUser(user)
      Router.push(Pages.HOME)
    } catch (err) {
      alert(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmitFailed = (errorInfo: any) => {
    alert(errorInfo)
  }

  return {
    isLoading,
    setIsLoading,
    handleSubmit,
    handleSubmitFailed,
  }
}

export default useLogin
