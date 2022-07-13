import React from 'react'
import { Form, Checkbox as AntdCheckbox } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

type CheckboxProps = {
  name: string
  label: string
}

type BasicCheckBoxProps = {
  label: string
  inputName: string
}

const BasicCheckBox: React.FC<BasicCheckBoxProps> = ({ label, inputName, ...props }) => {
  return (
    <Form.Item>
      <AntdCheckbox {...props}>{label}</AntdCheckbox>
    </Form.Item>
  )
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label }) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <BasicCheckBox inputName={name} label={label} {...field} />}
    />
  )
}

export default Checkbox
