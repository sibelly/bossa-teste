import { Request, Response } from 'express'
import Tool from '../schemas/tool/tool'

class ToolController {

/**
 * @api {get} /tools Index tools
 * @apiParam {String} [tag]  Optional tag param.
 * @apiParam {String} [filter] Optional filter by title or description param.
 *
 * @apiGroup Tool
 *
 * @apiSuccess (200) {json} List of tools.
 */
  public async index (req: Request, res: Response): Promise<Response> {
    let tools
    console.log('req.query', req.query)
    if (req.query && req.query.tag) {
      let tag = req.query.tag.split('=')
      tools = await Tool.find({tags: {"$in": `[${ tag[0] }]` }})
      return res.status(200).json(tools)
    } else if (req.query && req.query.filter) {
      let filter = req.query.filter.split('=')
      tools = await Tool.find({ title: filter[0] })
      return res.status(200).json(tools)
    } else {
      tools = await Tool.find()
      return res.status(200).json(tools)
    }
  }

 /**
 * @api {post} /tools Create tool
 * @apiParamExample {json} Request-Example:
 * {
 *  "title": "hotel",
 *  "link": "https://github.com/typicode/hotel",
 *  "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
 *  "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
 * }
 *
 * @apiGroup Tool
 *
 * @apiSuccess (201) {json} New tool.
 */
  public async create (req: Request, res: Response): Promise<Response> {
    const tool = await Tool.create(req.body)
    return res.status(201).json(tool)
  }

/**
 * @api {get} /tools/:id Show tool
 *
 * @apiGroup Tool
 *
 * @apiSuccess (200) {json} Existing tool.
 */
  public async show (req: Request, res: Response): Promise<Response> {
    const tool = await Tool.findOne(req.body)

    return res.status(200).json(tool)
  }

 /**
 * @api {update} /tools/:id Update tool
 *
 * @apiGroup Tool
 *
 * @apiSuccess (200) {json} Update tool.
 */
  public async update (req: Request, res: Response): Promise<Response> {
    const tool = await Tool.update(req.body, {})
    return res.status(200).json(tool)
  }

/**
 * @api {delete} /tools/:id Delete tool
 *
 * @apiGroup Tool
 *
 * @apiSuccess (200) {json} Delete tool.
 */
  public async destroy (req: Request, res: Response): Promise<Response> {
    const tool = await Tool.deleteOne(req.body)
    return res.status(200).json(tool)
  }
}

export default new ToolController()
