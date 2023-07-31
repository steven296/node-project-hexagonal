import Book from '../domain/book'
import { BookUpdate } from '../domain/interfaces/bookUpdate.interface'
import { BookRepository } from '../domain/book.repository'
import { BookEntity } from './book.entity'
import DataBaseBootstrap from '../../../bootstrap/database.bootstrap'
import { err, ok, Result } from 'neverthrow'
import { BookNotFoundException } from '../domain/exceptions/book.exception'

export default class BookInfraestructure implements BookRepository {

    async insert(book: Book): Promise<Book> {
        const bookInsert = new BookEntity()
    
        const { guid, title, author, content, pages, language, active } = book.properties()
        Object.assign(bookInsert, {
          guid,
          title,
          author,
          content,
          pages,
          language,
          active,
        })
    
        await DataBaseBootstrap.dataSource.getRepository(BookEntity).save(bookInsert)
        return book
    }

    async list(): Promise<Book[]> {
        console.log(BookEntity)
        const repo = DataBaseBootstrap.dataSource.getRepository(BookEntity)
    
        const result = await repo.find({ where: { active: true } })
        
        return result.map((el: BookEntity) => {
          return new Book({
            guid: el.guid,
            title: el.title,
            author: el.author,
            content: el.content,
            pages: el.pages,
            language: el.language,
            active: el.active,
          })
        })
    }

    async listOne(guid: string): Promise<Result<Book, BookNotFoundException>> {
        const repo = DataBaseBootstrap.dataSource.getRepository(BookEntity)
    
        const result = await repo.findOne({ where: { guid } })
    
        if (!result) {
          return err(new BookNotFoundException())
        } else {
          return ok(
            new Book({
              guid: result.guid,
              title: result.title,
              author: result.author,
              content: result.content,
              pages: result.pages,
              language: result.language,
              active: result.active,
            }),
          )
        }
    }
    
    async update(guid: string, book: Partial<BookUpdate>): Promise<Result<Book, BookNotFoundException>> {
        const repo = DataBaseBootstrap.dataSource.getRepository(BookEntity)
    
        const bookFound = await repo.findOne({
          where: { guid },
        })
    
        if (bookFound) {
          Object.assign(bookFound, book)
          const bookEntity = await repo.save(bookFound)
    
          return ok(
            new Book({
              guid: bookEntity.guid,
              title: bookEntity.title,
              author: bookEntity.author,
              content: bookEntity.content,
              pages: bookEntity.pages,
              language: bookEntity.language,
              active: bookEntity.active,
            }),
          )
        } else {
          return err(new BookNotFoundException())
        }
    }
    
    async delete(guid: string): Promise<Result<Book, BookNotFoundException>> {
        const repo = DataBaseBootstrap.dataSource.getRepository(BookEntity)
    
        const bookFound = await repo.findOne({
          where: { guid },
        })
    
        if (bookFound) {
          bookFound.active = false
          const bookEntity = await repo.save(bookFound)

          return ok(
            new Book({
              guid: bookEntity.guid,
              title: bookEntity.title,
              author: bookEntity.author,
              content: bookEntity.content,
              pages: bookEntity.pages,
              language: bookEntity.language,
              active: bookEntity.active,
            }),
          )
        } else {
          return err(new BookNotFoundException())
        }
    }
}