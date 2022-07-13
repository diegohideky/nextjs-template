import React from 'react'
import { Form, Switch as AntdSwitch } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

type SwitchProps = {
  name: string
  label?: string
}

type BasicSwitchProps = {
  label?: string
  inputName: string
}

const BasicSwitch: React.FC<BasicSwitchProps> = ({ label, inputName, ...props }) => {
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <Form.Item label={label}>
      <AntdSwitch {...props} />
      {errors[inputName] && <span>{errors[inputName].message}</span>}
    </Form.Item>
  )
}

const Switch: React.FC<SwitchProps> = ({ name, label }) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <BasicSwitch inputName={name} label={label} {...field} />}
    />
  )
}

export default Switch
