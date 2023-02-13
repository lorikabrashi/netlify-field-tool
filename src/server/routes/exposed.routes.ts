import { Request, Response, Router } from 'express'
import { ISiteData } from '../../shared/types'
import siteController from '../controllers/site.controller'
import { exceptionHandler } from '../services/exceptionHandler'
const router = Router()


router.post(
  '/add-site',
  exceptionHandler(async (req: Request<{}, {}, ISiteData>, res: Response) => {
    const result = siteController.createSite(req.body)
    res.json(siteController.helperService.formatResponse(result))
  })
)

export default router
