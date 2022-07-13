// 315MSeNsK

import Head from 'next/head'
import { useRouter } from 'next/router'
import { OverlayLoader } from '../../components'
import useConfirmation from './userConfirmation'

const ConfirmationPage: React.FC = () => {
  const { query } = useRouter()

  const { isLoading } = useConfirmation({ token: String(query.id) })

  return (
    <>
      <Head>
        <title>Confirmation</title>
        <meta name="description" content="Page to confirm your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? <OverlayLoader /> : <div>User Confirmed</div>}
    </>
  )
}

export default ConfirmationPage
