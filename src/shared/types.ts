import { ApiStatus } from './constants'

export interface IApiError {
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


export interface ISingleCollectionData {
  slug: string
  collection: string
}

export interface IDeleteCollectionData {
  name: string
  slug: string
}

export interface ICreateCollectionData {
  slug: string
  name: string
  label: string
}

export interface IApiResponse {
  confirmation: ApiStatus
}

export interface ISiteResponse extends IApiResponse {
  results: string
}

export interface ISiteOptionsResponse extends IApiResponse {
  results: INetlifyOptions
}
export interface ISiteCollectionsResponse extends IApiResponse {
  results: INetlifyCmsCollection[]
}

export interface ISiteCollectionResponse extends IApiResponse {
  results: INetlifyCmsCollection
}

type PublishMode = 'simple' | 'editorial_workflow'
type ExtensionType = 'yml' | 'yaml' | 'toml' | 'json' | 'md' | 'markdown' | 'html'
type FormatType = 'yml' | 'yaml' | 'toml' | 'json' | 'frontmatter' | 'yaml-frontmatter' | 'toml-frontmatter' | 'json-frontmatter'
type WidgetType = 'boolean' | 'date' | 'datetime' | 'file' | 'hidden' | 'image' | 'list' | 'map' | 'markdown' | 'number' | 'object' | 'relation' | 'select' | 'string' | 'text' | string
type MapType = 'Point' | 'LineString' | 'Polygon'
type MarkdownButtonType = 'bold' | 'italic' | 'code' | 'link' | 'heading-one' | 'heading-two' | 'quote' | 'code-block' | 'bulleted-list' | 'numbered-list'
type ValueType = 'int' | 'float'

export interface INetlifyCmsField {
  name: string
  label?: string
  widget: WidgetType
  default?: string | string[] | number
  required?: boolean
  hint?: string
  pattern?: string

  // date | datetime
  format?: string
  dateFormat?: boolean | string
  timeFormat?: boolean | string

  // file | image
  media_library?: {
    config: {
      multiple?: boolean
    }
  }

  // list | object
  allow_add?: boolean
  field?: INetlifyCmsField
  fields?: INetlifyCmsField[] // actually required in case of object

  // map
  type?: MapType

  // markdown
  buttons?: MarkdownButtonType[]

  // number
  valueType?: ValueType | string
  min?: number
  max?: number
  step?: number

  // relation
  collection?: string
  displayFields?: string[]
  searchFields?: string
  valueField?: string
  multiple?: boolean

  // select
  options?: string[] | { label: string; value: string }[]
}

export interface INetlifyCmsCollection {
  name: string
  identifier_field?: string
  label?: string
  label_singular?: string
  description?: string
  files?: INetlifyFile[]
  folder?: string
  filter?: string
  create?: boolean
  delete?: boolean
  extension?: ExtensionType
  format?: FormatType
  frontmatter_delimiter?: string | string[]
  slug?: string
  preview_path?: string
  fields?: INetlifyCmsField[]
  editor?: boolean
  summary?: string
}

export interface INetlifyFile {
  label?: string
  name: string
  file: string
  fields: INetlifyCmsField[]
}

export interface INetlifyCmsConfig {
  backend: {
    name: string
    repo?: string
    accept_roles?: string[]
    branch?: string
    api_root?: string
    site_domain?: string
    base_url?: string
    auth_endpoint?: string
  }

  publish_mode?: PublishMode

  media_folder: string
  public_folder?: string
  media_library?: {
    name: string
    config?: {
      publicKey?: string
    }
  }

  site_url?: string
  display_url?: string
  logo_url?: string
  show_preview_links?: boolean
  slug?: {
    encoding?: string
    clean_accents?: boolean
    sanitize_replacement?: string
  }

  collections: INetlifyCmsCollection[]
}

export type INetlifyOptions = Omit<INetlifyCmsConfig, 'collections'>
