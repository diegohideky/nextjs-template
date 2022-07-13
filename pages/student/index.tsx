import React from 'react'
import { Form as AntdForm, Button } from 'antd'
import { Form, DataEntries } from '../../components'
const { TextInput, Select, DatePicker, RadioGroup, Switch } = DataEntries
import { schema } from './schema'
import useStudent from './useStudent'
import withMainMenu from '../../HOCS/withMainMenu'

const Student: React.FC = () => {
  const { handleSubmit, radioOptions, selectOptions, initialValues } = useStudent()
  return (
    <Form schema={schema} onSubmit={handleSubmit} initialValues={initialValues}>
      <TextInput name="username" label="Name" />
      <TextInput name="email" label="Email" />
      <Select name="gender" label="Gender" options={selectOptions} />
      <DatePicker name="birthDate" label="Birthdate" />
      <RadioGroup name="option" label="Options" options={radioOptions} />
      <Switch name="enabled" label="Enabled" />
      <AntdForm.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </AntdForm.Item>
    </Form>
  )
}

export default withMainMenu(Student)
