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
