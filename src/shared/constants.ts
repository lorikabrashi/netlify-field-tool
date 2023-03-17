export const serverPort = process.env.SERVER_PORT || '4000'
export const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:4000'

export enum ApiStatus {
  success = 'Success',
  fail = 'Fail',
}

export enum AlertTypes {
  ERROR = 'danger',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  LIGHT = 'light',
  DARK = 'dark',
}

export enum CollectionTypes {
  NONE = 'None',
  FIELDS = 'Fields',
  FILES = 'Files',
}


export enum Descriptions {
  CHANGE_COLLECTION_TYPE = 'Changing the collection type will delete all previous fields created for this collection.'
}
