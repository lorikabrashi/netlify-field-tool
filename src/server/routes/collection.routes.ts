import { Request, Response, Router } from 'express'
import { IDeleteCollectionData } from '../../shared/types'
import collectionsController from '../controllers/collections.controller'
import { exceptionHandler } from '../services/exceptionHandler'

const router = Router()

router.get(
  '/',
  exceptionHandler(async (req: Request<{}, {}, {}, { slug: string }>, res: Response) => {
    const result = collectionsController.getCollections(req.query.slug)
    res.json(collectionsController.helperService.formatResponse(result))
  })
)

router.delete(
  '/',
  exceptionHandler(async (req: Request<{}, {}, IDeleteCollectionData>, res: Response) => {
    const result = collectionsController.deleteCollection(req.body.name, req.body.slug)
    res.json(collectionsController.helperService.formatResponse(result))
  })
)

export default router
