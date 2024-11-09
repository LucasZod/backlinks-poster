import { Router } from 'express'
import { create } from '../controllers/CustomerCreateController'
import { getAll } from '../controllers/CustomerListController'
import { update } from '../controllers/CustomerUpdateController'
import authMiddleware from '../middleware'

const route = Router()
route.get('/', authMiddleware, getAll as any)
route.post('/create', authMiddleware, create as any)
route.put('/update/:id', authMiddleware, update as any)

export default route
