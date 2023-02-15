import express, { Express } from 'express'
import path from 'path'
import morgan from 'morgan'

import exposedRouter from './routes/exposed.routes'
import cors from 'cors'
import { errorMiddleware } from './middleware/error.middleware'
import testData from './testData.json'
import { INetlifyCmsConfig } from '../shared/types'
const app: Express = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join('public')))
app.use(cors())

app.use('/site', exposedRouter)

app.use(errorMiddleware)

// const { collections, ...optionsObj } = testData

// console.log((testData as INetlifyCmsConfig).collections[1].files)

// console.log(optionsObj)

// console.log(collections)


export default app
