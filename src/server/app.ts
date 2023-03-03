import express, { Express } from 'express'
import path from 'path'
import morgan from 'morgan'

import siteRouter from './routes/site.routes'
import collectionRouter from './routes/collection.routes'

import cors from 'cors'
import { errorMiddleware } from './middleware/error.middleware'

const app: Express = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join('public')))
app.use(cors())

app.use('/site', siteRouter)
app.use('/collections', collectionRouter)

app.use(errorMiddleware)

export default app
