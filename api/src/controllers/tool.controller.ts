import { Request, Response } from 'express'
import Tool from '../schemas/tool/tool'

class ToolController {
  public async index (req: Request, res: Response): Promise<Response> {
    let tools
    console.log('req.query.tag', req.query)
    if (req.query && req.query.tag) {
      let filter = req.query.tag.split('=')
      tools = Tool.find({tags: {"$in": `[${ filter[0] }]` }})

      return res.status(200).json(tools)
    } else if (req.query && req.query.filter) {
      let filter = req.query.filter.split('=')
      tools = await Tool.find({ title: filter[0] })
      console.log(tools)

      return res.status(200).json(tools)
    } else {
      tools = await Tool.find()
      console.log(JSON.stringify(tools))

      return res.status(200).json(tools)
    }
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const tool = await Tool.create(req.body)
    return res.status(201).json(tool)
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
