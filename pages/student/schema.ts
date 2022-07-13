import * as yup from 'yup'

export const schema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().required(),
    gender: yup.string().oneOf(['M', 'F']).required(),
    birthDate: yup.date().required(),
    option: yup.string().required(),
    remember: yup.boolean(),
    enabled: yup.boolean(),
  })
  .required()
