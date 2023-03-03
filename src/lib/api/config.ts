import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../shared/constants'

export type AxiosConfig = { baseURL: string }

const axiosObj: AxiosConfig = {
  baseURL: apiUrl,
}

const instance = axios.create(axiosObj)

const responseBody = (response: AxiosResponse) => response.data

const requests = {
  get: async (url: string) => instance.get(url).then(responseBody),
  post: async (url: string, body?: {}) => instance.post(url, body).then(responseBody),
  put: async (url: string, body?: {}) => instance.put(url, body).then(responseBody),
  delete: async (url: string, body?: {}) => instance.delete(url, { data: body }).then(responseBody),
}

export default requests
