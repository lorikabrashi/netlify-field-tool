import { Request, Response, NextFunction } from 'express'
import { ApiError } from '../Errors/ApiError'
import { HelperService } from '../services/helper.service'

export const errorMiddleware = (error: ApiError, _req: Request, res: Response, _next: NextFunction) => {
  if (!error.hasOwnProperty('statusCode')) {
    error = new ApiError()
  }
  res.status(error.statusCode).json(HelperService.formatError(error))
}
