import express from 'express'
import authRoutes from './routes/auth'
import sequelize from './config/database'
import userRoutes from './routes/user'
import customerRoutes from './routes/customer'
import campaignRoutes from './routes/campaign'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { defineAssociations } from './defineAssociations'
import monitorCampaignJob from './services/cronCampaign'

const app = express()
const PORT = process.env.PORT || 3001
app.use(express.json())
app.use(cookieParser())
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }))
defineAssociations()
app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/customer', customerRoutes)
app.use('/campaign', campaignRoutes)

sequelize
  .authenticate()
  .then(() => {
    console.log('Banco de dados conectado.')
    // return sequelize.sync({ alter: true })
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))
    monitorCampaignJob.start()
  })
  .catch((error) => {
    console.error('Não permitido conectar no banco de dados:', error)
  })
