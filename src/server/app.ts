import express, { Express } from 'express'
import path from 'path'
import morgan from 'morgan'

import exposedRouter from './routes/exposed.routes'
import cors from 'cors'
import { errorMiddleware } from './middleware/error.middleware'

const app: Express = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join('public')))
app.use(cors())

app.use('/', exposedRouter)

app.use(errorMiddleware)

export default app
