import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../utils/jwt'

class Auth {
  public validate (req: Request, res: Response, next: NextFunction) {
    console.log('### passando pelo auth middleware => ', req.headers['x-access-token'])
    var token = req.headers['x-access-token']

    if (token) {
      jwt.verify(token, config.jwtSecret, function (err: Error) {
        if (err) {
          return res.status(403).send({
            success: false,
            status: '403 Token Inválido'
          })
        } else {
          next()
        }
      })
    }
    return res.status(401).send({
      success: false,
      status: '401 Unauthorized'
    })
  }
}

export default new Auth()
