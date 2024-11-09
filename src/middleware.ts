import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface AuthRequest extends Request {
  user?: any
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.cookies.token

  if (!token) {
    res.status(401).json({ message: 'Token não fornecido' })
    return
  }

  try {
    const decoded = jwt.verify(token, 'secret_key')
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: 'Token inválido ou expirado' })
    return
  }
}

export default authMiddleware
