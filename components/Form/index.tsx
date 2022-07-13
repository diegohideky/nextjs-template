import React from 'react'
import { Form as AntdForm } from 'antd'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface InitialValues {
  [key: string]: any
}

interface FormProps {
  initialValues: InitialValues
  schema: yup.AnyObjectSchema
  onSubmit: (values: any) => any
  children: React.ReactNode
}

const Form: React.FC<FormProps> = ({ onSubmit, initialValues, schema, children }) => {
  const methods = useForm<typeof initialValues>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  })

  const onFinishFailed = (errorInfo: any) => {
    alert(errorInfo)
  }

  return (
    <FormProvider {...methods}>
      <AntdForm
        name="basic"
        labelCol={{
          span: 0,
        }}
        wrapperCol={{
          span: 24,
        }}
        onFinish={methods.handleSubmit(onSubmit)}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {children}
      </AntdForm>
    </FormProvider>
  )
}

export default Form
