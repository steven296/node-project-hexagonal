import express, { Application } from 'express'
import hpp from 'hpp'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import routerHealth from './helpers/health'
import HandlerErrors from './helpers/errors'
import routerBook from './modules/book/interfaces/http/book.routes'

class App {
    readonly expressApp: Application

    constructor() {
        this.expressApp = express()
        this.owaspSecurityMiddlewares()
        this.mountHealthCheck()
        this.mountMiddlewares()
        this.mountRoutes()
        this.mountErrors()
    }

    owaspSecurityMiddlewares() {
        this.expressApp.use(hpp())
        this.expressApp.use(helmet())
        this.expressApp.use(
          cors({
            origin: '*',
            optionsSuccessStatus: 200,
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
          }),
        )
    }

    mountHealthCheck() {
        this.expressApp.use('/', routerHealth)
    }

    mountMiddlewares() {
        this.expressApp.use(compression())
        this.expressApp.use(express.json())
        this.expressApp.use(express.urlencoded({ extended: true }))
    }

    mountRoutes(): void {
        this.expressApp.use('/book', routerBook)
    }

    mountErrors(): void {
        this.expressApp.use(HandlerErrors.notFound)
        this.expressApp.use(HandlerErrors.genericError)
    }
}

export default new App().expressApp