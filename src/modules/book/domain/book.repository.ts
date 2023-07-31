import { Result } from 'neverthrow'
import { BookNotFoundException } from './exceptions/book.exception'
import Book from './book'
import { BookUpdate } from './interfaces/bookUpdate.interface'

//SOLID PRINCIPLE: INVERSION DEPENDENCY
export interface BookRepository {
   //DESIGN PATTERN: FACADE
   list(): Promise<Book[]>
   listOne(guid: string): Promise<Result<Book, BookNotFoundException>>
   insert(book: Book): Promise<Book>
   update(guid: string, book: Partial<BookUpdate>): Promise<Result<Book, BookNotFoundException>>
   delete(guid: string): Promise<Result<Book, BookNotFoundException>>

}