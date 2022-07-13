import React from 'react'
import { Form, Input as AntdInput } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'
import styles from './TextInput.module.scss'

type TextInputProps = {
  name: string
  label?: string
}

type BasicInputProps = {
  label?: string
  inputName: string
}

const BasicInput: React.FC<BasicInputProps> = ({ label, inputName, ...props }) => {
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <Form.Item label={label} name={inputName} className={errors[inputName] && styles.error}>
      <AntdInput {...props} />
      {errors[inputName] && (
        <span className={errors[inputName] && styles.error}>{errors[inputName].message}</span>
      )}
    </Form.Item>
  )
}

const TextInput: React.FC<TextInputProps> = ({ name, label }) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <BasicInput inputName={name} label={label} {...field} />}
    />
  )
}

export default TextInput
