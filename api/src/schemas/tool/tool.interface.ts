import { Document } from 'mongoose'

export interface ITool extends Document {
  title?: string,
  link?: string,
  description?: string,
  tags?: string[]
}
