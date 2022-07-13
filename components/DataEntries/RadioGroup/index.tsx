import React from 'react'
import { Form, Radio as AntdRadio } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'
import styles from './RadioGroup.module.scss'

type RadioOption = {
  value: string | number
  label: string
}

type RadioGroupProps = {
  name: string
  label?: string
  options: RadioOption[]
}

type BasicRadioGroupProps = {
  label?: string
  inputName: string
  options: RadioOption[]
}

const BasicRadioGroup: React.FC<BasicRadioGroupProps> = ({ label, inputName, options, ...props }) => {
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <Form.Item label={label} className={errors[inputName] && styles.error}>
      <AntdRadio.Group {...props}>
        {options.map((option) => (
          <AntdRadio key={option.value} value={option.value}>
            {option.label}
          </AntdRadio>
        ))}
      </AntdRadio.Group>
      {errors[inputName] && (
        <span className={`${errors[inputName] && styles.error} optionLabel`}>
          {errors[inputName].message}
        </span>
      )}
    </Form.Item>
  )
}

const RadioGroup: React.FC<RadioGroupProps> = ({ name, label, options }) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <BasicRadioGroup inputName={name} label={label} options={options} {...field} />
      )}
    />
  )
}

export default RadioGroup
