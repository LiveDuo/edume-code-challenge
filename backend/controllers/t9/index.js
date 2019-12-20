import { calculateT9 } from './calculateT9'

import express from 'express'

const router = express.Router()

router.get('/calculate', calculateT9)

export { router }