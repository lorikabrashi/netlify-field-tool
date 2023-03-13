import requests from './config'
import {
  ISiteResponse,
  ISiteData,
  ISiteOptionsResponse,
  ISiteCollectionsResponse,
  IDeleteCollectionData,
  ICreateCollectionData,
  ISiteCollectionResponse,
} from '../../shared/types'

export const api = {
  site: {
    create: (data: ISiteData): Promise<ISiteResponse> => requests.post('/site', data),
    delete: (data: { slug: string }): Promise<ISiteResponse> => requests.delete('/site', data),
    getOptions: (slug: string): Promise<ISiteOptionsResponse> => requests.get(`/site/options?slug=${slug}`),
  },
  collections: {
    delete: (data: IDeleteCollectionData): Promise<ISiteResponse> => requests.delete('/collections', data),
    get: (slug: string): Promise<ISiteCollectionsResponse> => requests.get(`/collections?slug=${slug}`),
    create: (data: ICreateCollectionData): Promise<ISiteResponse> => requests.post(`/collections`, data),
    single: (slug: string, collection: string): Promise<ISiteCollectionResponse> => requests.get(`/collections/${slug}/${collection}`),
  },
}
