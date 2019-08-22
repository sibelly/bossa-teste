import { Request, Response } from 'express'
import Usuario from '../schemas/usuario/usuario'

class UsuarioController {
  public async index (res: Response): Promise<Response> {
    const usuarios = await Usuario.find()
    return res.json(usuarios)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const usuario = await Usuario.create(req.body)

    console.log('req => ', req.body)

    return res.json(usuario)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const usuario = await Usuario.findOne(req.body)

    return res.json(usuario)
  }

  public async update (res: Response): Promise<Response> {
    // const usuario = await usuario.update(req.body)
    const usuario = ''
    return res.json(usuario)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    const usuario = await Usuario.deleteOne(req.body)
    return res.json(usuario)
  }
}

export default new UsuarioController()
