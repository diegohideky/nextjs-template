import { NextPage } from 'next'
import Head from 'next/head'

import { Card, Form, Input, Button } from 'antd'
import Link from 'next/link'
import { Container, OverlayLoader } from '../../components'
import useSignup from './useSignup'

const SignupPage: NextPage = () => {
  const { isLoading, handleSubmit, handleSubmitFailed } = useSignup()

  return (
    <>
      <Head>
        <title>Signup</title>
        <meta name="description" content="Create your account in our system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {isLoading && <OverlayLoader />}
        <Card title="Signup" extra={<Link href={'/login'}>I have an account</Link>}>
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
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
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

            <Form.Item
              label="Confirm your password"
              name="password_confirmation"
              rules={[{ required: true, message: 'Please input your password confirmation!' }]}
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

export default SignupPage
