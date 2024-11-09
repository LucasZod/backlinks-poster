import { Router } from 'express'
import { login } from '../controllers/AuthController'
import authMiddleware from '../middleware'

const router = Router()
router.post('/login', login as any)

router.get('/check', authMiddleware, (req, res) => {
  res.json({ authenticated: true, message: 'Token válido' })
})

export default router
