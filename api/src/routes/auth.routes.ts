import { Router } from 'express'

import AuthController from '../controllers/auth.controller'

const routes = Router()

// POST /registrar
routes.post('/registrar', AuthController.registrar)

// POST /login
routes.post('/login', AuthController.login)

export default routes
