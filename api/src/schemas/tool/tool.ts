import { Schema, model } from 'mongoose'
import { ITool } from './tool.interface'

const ToolSchema = new Schema({
  title: {
    type: String
  },
  link: String,
  description: {
    type: String
  },
  tags: {
    type: [String]
  }
}, {
  timestamps: true
})


const Tool = model<ITool>('Tool', ToolSchema)

export default Tool