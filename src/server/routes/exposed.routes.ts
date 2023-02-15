import { Request, Response, Router } from 'express'
import { ISiteData } from '../../shared/types'
import siteController from '../controllers/site.controller'
import { exceptionHandler } from '../services/exceptionHandler'
const router = Router()

router.post(
  '/',
  exceptionHandler(async (req: Request<{}, {}, ISiteData>, res: Response) => {
    const result = siteController.createSite(req.body)
    res.json(siteController.helperService.formatResponse(result))
  })
)

router.delete(
  '/',
  exceptionHandler(async (req: Request<{}, {}, { slug: string }>, res: Response) => {
    const result = siteController.deleteSite(req.body.slug)
    res.json(siteController.helperService.formatResponse(result))
  })
)

export default router
