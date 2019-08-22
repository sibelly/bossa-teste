import { Schema, model } from 'mongoose'
import { IUsuario } from './usuario.interface'

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  nome: String,
  senha: {
    type: String,
    required: true
  },
  tools: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tool'
    }
  ]
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return (this.firstName.trim() + ' ' + this.lastName.trim())
}

const Usuario = model<IUsuario>('Usuario', UserSchema)

export default Usuario