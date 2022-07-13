import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '../contexts/UserContext'
import { appWithTranslation } from 'next-i18next'
import { Toast } from '../components'
const { ToastContainer } = Toast

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </UserProvider>
  )
}

export default appWithTranslation(MyApp)
