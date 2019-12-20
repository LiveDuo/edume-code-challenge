import express from 'express'

import morgan from 'morgan'

import { config } from '../defaults'

import { router as t9Router } from '../../controllers/v1/t9'

import { notFound } from '../../controllers/errors/notFound'

const app = express()

const logger = morgan('combined')
app.use(logger)

const urlencoded = express.urlencoded({extended: false})
app.use(urlencoded)

const json = express.json()
app.use(json)

app.use('/v1/t9', t9Router)

app.use(notFound)

const PORT = config.defaultPort || process.env.PORT

const listen = () => app.listen(PORT, () => console.log(`Express listening on port ${PORT}`))

export { listen }