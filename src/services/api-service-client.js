import axios from 'axios'

import { API_URL, API_VERSION } from 'common/api'
import store from 'store'

const apiServiceClient = axios.create({
  baseURL: `${API_URL}/${API_VERSION}`,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

apiServiceClient.interceptors.request.use(config => {
  const token = store.getState().user.token

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

apiServiceClient.interceptors.response.use(
  response => {
    return { status: response.status, data: response.data }
  },
  error => {
    if (axios.isCancel(error)) {
      return Promise.reject(error)
    } else if (error.response) {
      return Promise.reject({
        ...error.response.data,
        errorStatus: error.response.status,
        globalError:
          !error.response.data.errorCode || error.response.status === 400,
      })
    } else {
      return Promise.reject({
        ...error,
        globalError: true,
      })
    }
  },
)

export default apiServiceClient
