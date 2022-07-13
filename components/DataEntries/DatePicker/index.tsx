import React from 'react'
import { Form, DatePicker as AntdDatePicker } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'
import styles from './DatePicker.module.scss'

type DatePickerProps = {
  name: string
  label?: string
}

type BasicDatePickerProps = {
  label?: string
  inputName: string
}

const BasicDatePicker: React.FC<BasicDatePickerProps> = ({ label, inputName, ...props }) => {
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <Form.Item label={label} name={inputName} className={errors[inputName] && styles.error}>
      <AntdDatePicker {...props} />
      {errors[inputName] && (
        <span className={errors[inputName] && styles.error}>{errors[inputName].message}</span>
      )}
    </Form.Item>
  )
}

const DatePicker: React.FC<DatePickerProps> = ({ name, label }) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <BasicDatePicker inputName={name} label={label} {...field} />}
    />
  )
}

export default DatePicker
