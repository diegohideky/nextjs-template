import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import withMainMenu from '../HOCS/withMainMenu'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Button } from 'antd'
import { Toast } from '../components'
import { ToastType } from '../components/Toast'
const { notify } = Toast

type HomeProps = {
  locale?: string
}

const Home: NextPage<HomeProps> = ({ locale }) => {
  const { t } = useTranslation()

  const handleNotify = (type: ToastType) => {
    notify(type, `Exemplo de toast do tipo ${type}`)
  }

  return (
    <div>
      <Head>
        <title>Corelab</title>
        <meta name="description" content="Welcome to Corelab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {t('home:welcome_message')}
      <h2>{locale}</h2>
      Examplos de toast:
      <Button onClick={() => handleNotify('error')}>Error</Button>
      <Button onClick={() => handleNotify('info')}>Info</Button>
      <Button onClick={() => handleNotify('success')}>Success</Button>
      <Button onClick={() => handleNotify('warning')}>Warning</Button>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(String(locale), ['home']))
    }
  }
}

export default withMainMenu(Home)