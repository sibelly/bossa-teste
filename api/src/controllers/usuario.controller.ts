import { Request, Response } from 'express'
import Usuario from '../schemas/usuario/usuario'

class UsuarioController {

/**
 * @api {get} /usuarios Index users
 *
 * @apiGroup Usuario
 *
 * @apiSuccess (200) {json} List of users.
 */
  public async index (res: Response): Promise<Response> {
    const usuarios = await Usuario.find()
    return res.json(usuarios)
  }

 /**
 * @api {get} /usuarios/:id Show user
 *
 * @apiGroup Usuario
 *
 * @apiSuccess (201) {json} Existing user.
 */
  public async show (req: Request, res: Response): Promise<Response> {
    const usuario = await Usuario.findOne(req.body)

    return res.json(usuario)
  }
 /**
 * @api {update} /usuarios/:id Update user
 *
 * @apiGroup Usuario
 *
 * @apiSuccess (200) {json} Update user.
 */
  public async update (res: Response): Promise<Response> {
    // const usuario = await usuario.update(req.body)
    const usuario = ''
    return res.json(usuario)
  }

/**
 * @api {delete} /usuarios/:id Delete user
 *
 * @apiGroup Usuario
 *
 * @apiSuccess (200) {json} Delete user.
 */
  public async destroy (req: Request, res: Response): Promise<Response> {
    const usuario = await Usuario.deleteOne(req.body)
    return res.json(usuario)
  }
}

export default new UsuarioController()
