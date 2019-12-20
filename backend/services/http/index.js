import express from 'express'

// import logger
import { config } from '../defaults'

import { router as t9Router } from '../../controllers/t9/index'

import { notFound } from '../../controllers/errors/notFound'

const app = express()

const PORT = config.defaultPort || process.env.PORT

const listen = () => app.listen(PORT, () => console.log(`Express listening on port ${PORT}`))

// app.use(logger)
// app.use(parser)
// app.use(json)

app.use('/t9', t9Router)

app.use(notFound)

export { listen }