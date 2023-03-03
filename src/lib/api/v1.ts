import requests from './config'
import { ISiteResponse, ISiteData, ISiteOptionsResponse, ISiteCollectionResponse, IDeleteCollectionData } from '../../shared/types'

export const api = {
  site: {
    create: (data: ISiteData): Promise<ISiteResponse> => requests.post('/site', data),
    delete: (data: { slug: string }): Promise<ISiteResponse> => requests.delete('/site', data),
    getOptions: (slug: string): Promise<ISiteOptionsResponse> => requests.get(`/site/options?slug=${slug}`),
  },
  collections: {
    delete: (data: IDeleteCollectionData): Promise<ISiteResponse> => requests.delete('/collections', data),
    get: (slug: string): Promise<ISiteCollectionResponse> => requests.get(`/collections?slug=${slug}`),
  },
}
