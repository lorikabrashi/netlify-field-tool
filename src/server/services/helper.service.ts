import { IApiError } from '../../shared/types'
import { ApiStatus } from '../../shared/constants'

export class HelperService {
  public static formatError(err: IApiError) {
    return {
      confirmation: ApiStatus.fail,
      statusCode: err.statusCode || 500,
      name: err.name,
      message: err.message,
    }
  }

  public formatResponse(results: any) {
    return {
      confirmation: ApiStatus.success,
      results,
    }
  }
}

const helperService = new HelperService()
export default helperService
