export interface IModal {
  state: boolean
  title: string
  content: React.ReactElement
  size?: string
}

export interface IPath {
  name: string
  slug: string
  path: string
}
