import { Router } from 'express'
import { authValidation } from '../middleware/authValidation.js'


const naturebaRouter = Router()

naturebaRouter.use(authValidation)


export default naturebaRouter