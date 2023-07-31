import { NextFunction, Request, Response } from 'express'
import BookApplication from '../../application/book.application'
import BookFactory from '../../domain/book-factory'
import { BookInsertMapping } from './dto/book-insert.dto'
import { BookListOneMapping } from './dto/book-list-one.dto'
import { BookListMapping } from './dto/book-list.dto'
import { GuidVO } from '../../domain/value-objects/guid.vo'
import { BookUpdateMapping } from './dto/book-update.dto'
import { BookDeleteMapping } from './dto/book-delete.dto'
import { IError } from '../helpers/ierror'

export default class {

    constructor(private application: BookApplication) {
        this.insert = this.insert.bind(this)
        this.list = this.list.bind(this)
        this.listOne = this.listOne.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    async insert(req: Request, res: Response, next: NextFunction) {
        const { title, author, content, pages, language } = req.body

        const bookResult = await new BookFactory().create(title, author, content, pages, language)

        if (bookResult.isErr()) {
            const err: IError = new Error(bookResult.error.message)
            err.status = 411
            return next(err)
        } else {
            const data = await this.application.insert(bookResult.value)
            const result = new BookInsertMapping().execute(data.properties())
            res.status(201).json(result)
        }
    }

    async list(_req: Request, res: Response) {
        const list = await this.application.list()
        const result = new BookListMapping().execute(list.map(book => book.properties()))
        res.json(result)
    }

    async listOne(req: Request, res: Response, next: NextFunction) {
        const { guid } = req.params

        const guidResult = GuidVO.create(guid)
        if (guidResult.isErr()) {
            const err: IError = new Error(guidResult.error.message)
            err.status = 411
            return next(err)
        }

        const bookResult = await this.application.listOne(guid)

        if (bookResult.isErr()) {
            return res.status(404).send(bookResult.error.message)
        } else if (bookResult.isOk()) {
            const result = new BookListOneMapping().execute(bookResult.value.properties())
            return res.json(result)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const { guid } = req.params
        const fieldsToUpdate = req.body

        const guidResult = GuidVO.create(guid)
        if (guidResult.isErr()) {
            const err: IError = new Error(guidResult.error.message)
            err.status = 411
            return next(err)
        }

        const dataResult = await this.application.update(guid, fieldsToUpdate)
        if (dataResult.isErr()) {
            const err: IError = new Error(dataResult.error.message)
            err.status = 411
            return next(err)
        } else {
            const result = new BookUpdateMapping().execute(dataResult.value.properties())
            res.json(result)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const { guid } = req.params

        const guidResult = GuidVO.create(guid)
        if (guidResult.isErr()) {
            const err: IError = new Error(guidResult.error.message)
            err.status = 411
            return next(err)
        }

        const dataResult = await this.application.delete(guid)
        if (dataResult.isErr()) {
            const err: IError = new Error(dataResult.error.message)
            err.status = 404
            return next(err)
        } else {
            const result = new BookDeleteMapping().execute(dataResult.value.properties())
            res.json(result)
        }
    }
}