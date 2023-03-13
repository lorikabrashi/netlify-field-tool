import { Request, Response, Router } from 'express'
import { ICreateCollectionData, IDeleteCollectionData, ISingleCollectionData } from '../../shared/types'
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

router.get(
  '/:slug/:collection',
  exceptionHandler(async (req: Request<ISingleCollectionData, {}, {}>, res: Response) => {
    const result = collectionsController.getSingleCollection(req.params)
    res.json(collectionsController.helperService.formatResponse(result))
  })
)

router.delete(
  '/',
  exceptionHandler(async (req: Request<{}, {}, IDeleteCollectionData>, res: Response) => {
    const result = collectionsController.deleteCollection(req.body)
    res.json(collectionsController.helperService.formatResponse(result))
  })
)

router.post(
  '/',
  exceptionHandler(async (req: Request<{}, {}, ICreateCollectionData>, res: Response) => {
    const result = collectionsController.createCollection(req.body)
    res.json(collectionsController.helperService.formatResponse(result))
  })
)

export default router
