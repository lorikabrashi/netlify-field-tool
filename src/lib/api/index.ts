import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../shared/constants'
import { ISiteData } from '../../shared/types'
export type AxiosConfig = { baseURL: string }

const axiosObj: AxiosConfig = {
  baseURL: apiUrl,
}

const instance = axios.create(axiosObj)

const responseBody = (response: AxiosResponse) => response.data

const requests = {
  get: async (url: string) => instance.get(url).then(responseBody),
  post: async (url: string, body?: {}) => instance.post(url, body).then(responseBody),
  put: async (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: async (url: string) => instance.delete(url).then(responseBody),
}

export const api = {
  test: (): Promise<any> => requests.get('/test'),
  addSite: (data: ISiteData) => requests.post('/add-site', data)
}
