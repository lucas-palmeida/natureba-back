import { Router } from 'express'
import { creatbuy, listbuy } from '../controller/buy.js'

const buyRouter = Router()


buyRouter.post("/sales", creatbuy)
buyRouter.get("/sales", listbuy)

export default buyRouter