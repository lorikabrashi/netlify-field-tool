import { Request, Response, Router } from 'express'
import { ISiteData } from '../../shared/types'
import siteController from '../controllers/site.controller'
import { exceptionHandler } from '../middleware/exceptionHandler.middleware'
const router = Router()

router.post(
  '/',
  exceptionHandler(async (req: Request<{}, {}, ISiteData>, res: Response) => {
    const result = await siteController.createSite(req.body)
    res.json(siteController.helperService.formatResponse(result))
  })
)

router.delete(
  '/',
  exceptionHandler((req: Request<{}, {}, { slug: string }>, res: Response) => {
    const result = siteController.deleteSite(req.body.slug)
    res.json(siteController.helperService.formatResponse(result))
  })
)

router.get(
  '/options',
  exceptionHandler((req: Request<{}, {}, {}, { slug: string }>, res: Response) => {
    const result = siteController.getOptions(req.query.slug)
    res.json(siteController.helperService.formatResponse(result))
  })
)



export default router
