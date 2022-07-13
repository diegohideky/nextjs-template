import axios from '../libs/axios'

const getHeaders = () => ({
  'Content-Type': 'application/json',
  ...(localStorage.getItem('token') && {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }),
})

const post = async (path: string, body: object): Promise<any> => {
  return axios
    .post(path, body, {
      headers: getHeaders(),
    })
    .then((res) => res.data.payload)
    .catch((err) => {
      const message =
        err.response.status === 400 ? 'Invalid request try again' : 'Something went wrong'
      throw new Error(message)
    })
}

const request = {
  post,
}

export default request
