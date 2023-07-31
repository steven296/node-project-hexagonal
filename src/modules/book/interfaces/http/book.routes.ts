import { Router } from 'express'
import BookApplication from '../../application/book.application'
import { BookRepository } from '../../domain/book.repository'
import BookInfraestructure from '../../infraestructure/book.infraestructure'
import BookController from './book.controller'
import { MiddlewareListOne } from './middlewares/book.middleware'

const infraestructure: BookRepository = new BookInfraestructure()
const application = new BookApplication(infraestructure)
const controller = new BookController(application)

class BookRouter {
  readonly expressRouter: Router

  constructor() {
    this.expressRouter = Router()
    this.mountRoutes()
  }

  mountRoutes() {
    this.expressRouter.post('/insert', controller.insert)
    this.expressRouter.get('/list', controller.list)
    this.expressRouter.get('/listOne/:guid', ...MiddlewareListOne, controller.listOne)
    this.expressRouter.put('/update/:guid', controller.update)
    this.expressRouter.delete('/delete/:guid', controller.delete)
  }
}

export default new BookRouter().expressRouter