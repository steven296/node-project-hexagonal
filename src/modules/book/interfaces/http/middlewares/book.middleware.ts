import { validate } from 'class-validator'
import { Request, Response, NextFunction } from 'express'
import { BookListOneValidator } from '../validators/bookListOne.validator'

class BookMiddleware {
    static async ValidateListOne(req: Request, _res: Response, next: NextFunction) {
        const { guid } = req.params
        const bookListOneValidator = new BookListOneValidator()
        bookListOneValidator.guid = guid
        const errors = await validate(bookListOneValidator)

        if (errors.length > 0) {
            console.log(errors)
            return next(new Error('Invalid request'))
        }

        next()
    }
}

export const MiddlewareListOne: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
    BookMiddleware.ValidateListOne
]