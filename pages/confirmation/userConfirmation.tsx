import { useEffect, useState } from 'react'
import Router from 'next/router'
import authApi from '../../api/auth'
import { Pages } from '../../enums/pages'
import { Toast } from '../../components'

const useConfirmation = (props: { token: string }) => {
  const { token } = props
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const confirm = async () => {
      setIsLoading(true)

      try {
        const payload = await authApi.confirm({ token })
        Toast.notify('success', 'User successfully confirmed')

        Router.push(Pages.LOGIN)
      } catch (err) {
        Toast.notify('error', err.message)
      } finally {
        setIsLoading(false)
      }
    }

    if (token) {
      confirm()
    }
  }, [token])

  return {
    isLoading,
  }
}

export default useConfirmation
