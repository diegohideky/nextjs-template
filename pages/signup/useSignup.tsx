import { useContext, useState } from 'react'
import { TSignup } from '../../types/auth'
import authApi from '../../api/auth'
import { UserContext } from '../../contexts/UserContext'

const useSigup = () => {
  const { user, getToken } = useContext(UserContext)

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (values: TSignup) => {
    setIsLoading(true)
    try {
      const payload = await authApi.signup(values)
      alert('User successfully created: ' + payload)
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

export default useSigup
