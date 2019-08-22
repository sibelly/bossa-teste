import { Router } from 'express'

import auth from './middlewares/auth'

import authRoutes from './routes/auth.routes'
import toolRoutes from './routes/tool.routes'
import usuarioRoutes from './routes/usuario.routes'

const router = Router()


// Rotas para usuários comuns
router.use('/', authRoutes)
router.use('/tools', toolRoutes, auth.validate)
router.use('/usuarios', usuarioRoutes)

export default router
