import { ApiError } from '../../shared/types'

export class HelperService {
  public static formatError(err: ApiError) {
    return {
      confirmation: 'Fail',
      statusCode: err.statusCode || 500,
      name: err.name,
      message: err.message,
    }
  }

  public formatResponse(results: any) {
    return {
      confirmation: 'Success',
      results,
    }
  }
}

const helperService = new HelperService()
export default helperService
