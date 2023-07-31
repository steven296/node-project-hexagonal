import { v4 as uuidv4 } from 'uuid'
import Book from './book'
import { BookProperties } from './types/bookProperties.type'
import {
   BookTitleRequiredException,
   BookAuthorRequiredException,
   BookPagesRequiredException,
   BookLanguageRequiredException,
} from './exceptions/book.exception'
import { Result, err, ok } from 'neverthrow'

export type BookResult = Result<
   Book,
   | BookTitleRequiredException
   | BookAuthorRequiredException
   | BookPagesRequiredException
   | BookLanguageRequiredException
>

export default class BookFactory {

   async create(title: string, author: string, content: string, pages: string, language: string): Promise<BookResult> {

      if (!title || title.trim() === '') {
         return err(new BookTitleRequiredException())
      }

      if (!author || author.trim() === '') {
         return err(new BookAuthorRequiredException())
      }

      if (!pages || pages.trim() === '') {
         return err(new BookPagesRequiredException())
      }

      if (!language || language.trim() === '') {
         return err(new BookLanguageRequiredException())
      }

      const bookProperties: BookProperties = {
         title,
         author,
         content,
         pages,
         language,
         guid: uuidv4(),
      }

      const book = new Book(bookProperties)
      return ok(book)
   }
}