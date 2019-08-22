import { Schema, model } from 'mongoose'
import { ITool } from './tool.interface'

const ToolSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: String,
  description: {
    type: String,
    required: true
  },
  tags: [
    {
      type: Array
    }
  ]
}, {
  timestamps: true
})


const Tool = model<ITool>('Tool', ToolSchema)

export default Tool