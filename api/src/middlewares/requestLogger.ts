import express from 'express'

const requestLogger = (req: express.Request, resp: express.Response, next: express.NextFunction) => {
  console.info(`${req.method} ${req.originalUrl}`)
  const start = new Date().getTime()
  resp.on('finish', () => {
    const elapsed = new Date().getTime() - start
    console.log(`${req.method} ${req.originalUrl} ${resp.statusCode} ${elapsed}ms`)
  })
  next()
}

export { requestLogger }