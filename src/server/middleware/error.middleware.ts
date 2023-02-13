import { Request, Response, NextFunction } from 'express'
import { ApiError } from '../Errors/ApiError'
import { HelperService } from '../services/helper.service'

export const errorMiddleware = (error: ApiError | Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status((error as ApiError)?.statusCode || 404).json(HelperService.formatError(error))
}
