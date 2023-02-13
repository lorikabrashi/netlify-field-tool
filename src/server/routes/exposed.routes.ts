import { Request, Response, Router } from 'express'
import { ISiteData } from '../../shared/types'
import { exceptionHandler } from '../services/exceptionHandler'
const router = Router()

router.get('/test', (_req: Request, res: Response) => {
  res.json('ok')
})

router.post(
  '/add-site',
  exceptionHandler((req: Request<{}, {}, ISiteData>, res: Response) => {
    console.log(req.body)
  })
)

export default router
