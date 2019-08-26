import { Router } from 'express'

import ToolController from '../controllers/tool.controller'

const routes = Router()

// GET tools
routes.get('/', ToolController.index)

// POST tools
routes.post('/', ToolController.create)

// GET tools/:id
routes.get('/:_id', ToolController.show)

// PUT tools/:id
routes.put('/:_id', ToolController.update)

// DELETE tools/:id
routes.delete('/:_id', ToolController.destroy)

export default routes
