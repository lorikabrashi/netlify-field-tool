export interface ApiError {
  statusCode?: number | string
  message: string
  name: string
}

export interface IModal {
  state: boolean
  title: string
  content: React.ReactElement
  size?: string
}

export interface ISiteData {
  name: string
  slug: string
  path: string
}

