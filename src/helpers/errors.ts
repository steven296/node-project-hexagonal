import { Request, Response } from 'express'
import { IError } from 'src/modules/book/interfaces/helpers/ierror'

export default class {
   
   static notFound(req: Request, res: Response): void {
      res.status(404).send('Not Found')
   }

   static genericError(error: IError, _req: Request, res: Response): void {
      res.status(error.status || 500).json({
        message: error.message,
        stack: error.stack,
      })
    }
}