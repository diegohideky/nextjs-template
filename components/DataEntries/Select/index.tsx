import React from 'react'
import { Form, Select as AntdSelect } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'
import styles from './Select.module.scss'

type SelectOption = {
  value: string | number
  label: string
}

type SelectProps = {
  name: string
  label?: string
  options: SelectOption[]
}

type BasicSelectProps = {
  label?: string
  inputName: string
  options: SelectOption[]
}

const BasicSelect: React.FC<BasicSelectProps> = ({ label, inputName, options, ...props }) => {
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <Form.Item label={label} className={errors[inputName] && styles.error}>
      <AntdSelect {...props}>
        {options.map((option) => (
          <AntdSelect.Option key={option.value} value={option.value}>
            {option.label}
          </AntdSelect.Option>
        ))}
      </AntdSelect>
      {errors[inputName] && (
        <span className={errors[inputName] && styles.error}>{errors[inputName].message}</span>
      )}
    </Form.Item>
  )
}

const Select: React.FC<SelectProps> = ({ name, label, options }) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <BasicSelect inputName={name} label={label} options={options} {...field} />
      )}
    />
  )
}

export default Select
