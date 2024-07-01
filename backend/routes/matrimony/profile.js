import express from 'express'
import { createProfile } from '../../controllers/matrimonyProfile.js'
const router = express.Router()

router.post('/createProfile',createProfile)
export default router