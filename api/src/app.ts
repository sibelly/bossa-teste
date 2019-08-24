import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

import { requestLogger } from './middlewares/requestLogger'
import routes from './routes'
import dotenv from 'dotenv'

class App {
    public express: express.Application

    public constructor () {
      dotenv.config()
      this.express = express()

      this.middlewares()
      this.database()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
      this.express.use(bodyParser.json({ limit: '50mb' }))

      // Para debug
      this.express.use(requestLogger)
      
    }

    private database (): void {
      console.log(`NODE_ENV=${process.env.NODE_ENV}`)
      
      let uri = ''
      if (`${process.env.NODE_ENV}` === 'production') {
        uri = `mongodb://${process.env.MONGO_USER}:${ process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`
      } else {
        uri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`
      }
      
      console.log(`uri=${uri}`)

      mongoose.connect(uri, { useNewUrlParser: true })
        .then(() => console.log('Connected to MongoDB!'))
        .catch(err => console.error('Could not connect to MongoDB:‌', err))
    }

    private routes (): void {
      this.express.route('/api').get((req, res) => {
        res.status(200).send({
          success: true,
          status: '200 Ok',
          versao: '0.0.1'
        })
      })

      this.express.use('/', routes)
    }
}

export default new App().express
