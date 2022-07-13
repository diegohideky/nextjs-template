import { NextPage } from 'next'
import Head from 'next/head'

import { Card, Form, Input, Button } from 'antd'
import Link from 'next/link'

import { Container, OverlayLoader } from '../../components'
import useLogin from './useLogin'

const LoginPage: NextPage = () => {
  const { isLoading, handleSubmit, handleSubmitFailed } = useLogin()
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Make your login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {isLoading && <OverlayLoader />}
        <Card title="Login" extra={<Link href={'/signup'}>Create an account</Link>}>
          <Form
            name="basic"
            onFinish={handleSubmit}
            onFinishFailed={handleSubmitFailed}
            autoComplete="off"
            style={{ width: '100%' }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Container>
    </>
  )
}

export default LoginPage
