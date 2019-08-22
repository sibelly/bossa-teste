import { Router } from 'express'

import UsuarioController from '../controllers/usuario.controller'

const routes = Router()

// GET usuarios
routes.get('/', UsuarioController.index)

// POST usuarios
routes.post('/', UsuarioController.create)

// GET usuarios/:id
routes.get('/:id', UsuarioController.show)

// PUT usuarios/:id
routes.put('/:id', UsuarioController.update)

// DELETE usuarios/:id
routes.delete('/:id', UsuarioController.destroy)

export default routes
