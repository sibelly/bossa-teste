import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import Usuario from '../schemas/usuario/usuario'
import { IUsuario } from '../schemas/usuario/usuario.interface';

class AuthController {

/**
 * @api {get} /registrar Create user
 * @apiParam {String} [email] email param.
 * @apiParam {String} [nome] nome param.
 * @apiParam {String} [senha] senha param.
 *
 * @apiGroup Auth
 *
 * @apiSuccess (200) {json} Created user.
 */
  public async registrar (req: Request, res: Response, next:NextFunction) {
    const email = req.body.email
    const senha = req.body.senha

    
    Usuario.findOne({ email: email })
    .then(async (usuarioDoc) => {
      if(usuarioDoc) {
        return res.status(401).send('Já existe usuário com esse email.')
      }
      return bcrypt.hash(senha, 12)
      .then(async (senhaCriptografada) => {
        req.body.senha = senhaCriptografada
        try {
          const usuario = await Usuario.create(req.body)
          next()
          return res.status(200).send(`Usuário ${usuario.email} criado com sucesso.`)
        } catch (erro) {
          return res.status(400).send(erro)
        }
      })
    })
    .catch((erro) => {
      return res.status(400).send(erro)
    })
  }

/**
 * @api {get} /login Authenticates user
 * @apiParam {String} [email] email param.
 * @apiParam {String} [senha] senha param.
 *
 * @apiGroup Auth
 *
 * @apiSuccess (200) {json} Created user.
 */
  public async login (req: Request, res: Response, next:NextFunction): Promise<Response> {
    const email = req.body.email;
    const senha = req.body.senha;
    let usuarioEncontrado: IUsuario;
    try {
      const usuario = await Usuario.findOne({ email: email });
      if (!usuario) {
        return res.status(404).send('Usuário não encontrado.')
      }
      usuarioEncontrado = usuario;
      const ehIgual = await bcrypt.compare(senha, usuario.senha);
      if (!ehIgual) {
        return res.status(401).send('Usuário não autorizado.')
      }
      const token = jwt.sign(
        {
          email: usuarioEncontrado.email,
          usuarioId: usuarioEncontrado.nome.toString()
        },
        'somesupersecretsecret',
        { expiresIn: '1h' }
      );
      res.status(200).json({ token: token, usuarioId: usuarioEncontrado.nome.toString() });
      return;
    } catch (erro) {
      next();
      return res.status(erro.statusCode).send('Ops. Algo inesperado aconteceu.' + erro.message)
    }
  }
}

export default new AuthController()
