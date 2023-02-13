export class ApiError extends Error {
  message: string
  statusCode: number
  name: string

  constructor() {
    super()
    this.message = 'Something went wrong!'
    this.statusCode = 500
    this.name = 'Api Error'
  }
}
