import { Request, Response } from 'express'
import Tool from '../schemas/tool/tool'

class ToolController {
  public async index (req: Request, res: Response): Promise<Response> {
    console.log('req=>', req)
    const tools = await Tool.find()
    return res.json(tools)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const tool = await Tool.create(req.body)

    console.log('req => ', req.body)

    return res.json(tool)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const tool = await Tool.findOne(req.body)

    return res.json(tool)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const tool = await Tool.update(req.body, {})
    return res.json(tool)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    const tool = await Tool.deleteOne(req.body)
    return res.json(tool)
  }
}

export default new ToolController()
