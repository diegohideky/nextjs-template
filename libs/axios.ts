import axios from 'axios'
import axiosRetry from 'axios-retry'

// Exponential back-off retry delay between requests
// axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay })

// Custom retry delay
// axiosRetry(axios, {
//   retryDelay: (retryCount) => {
//     return retryCount * 1000
//   },
// })

// Works with custom axios instances
const client = axios.create({ baseURL: 'http://localhost:3333/api/v1' })
axiosRetry(client, { retries: 3, retryDelay: axiosRetry.exponentialDelay })

export default client
