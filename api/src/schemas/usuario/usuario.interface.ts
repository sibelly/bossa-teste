import { Document } from 'mongoose'

export interface IUsuario extends Document {
  email?: string,
  nome?: string,
  senha?: string,
  tools?: string[]
}
