import moment, { Moment } from 'moment'

interface IFormInput {
  username: string
  email: string
  gender: 'M' | 'F'
  birthDate: Moment
  remember: boolean
}

const useStudent = () => {
  const handleSubmit = (values: any) => {
    console.log('Formvalues', values)
  }

  const initialValues: Partial<IFormInput> = {
    username: 'Yago',
    email: 'email',
    gender: 'M',
    birthDate: moment(),
    remember: false,
  }

  const selectOptions = [
    {
      value: 'M',
      label: 'Male',
    },
    {
      value: 'F',
      label: 'Female',
    },
  ]
  const radioOptions = [
    {
      value: 'option1',
      label: 'Option 1',
    },
    {
      value: 'option2',
      label: 'Option 2',
    },
    {
      value: 'option3',
      label: 'Option 3',
    },
  ]

  return {
    selectOptions,
    radioOptions,
    handleSubmit,
    initialValues,
  }
}

export default useStudent
