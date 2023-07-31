import { BookUpdate } from '../domain/interfaces/bookUpdate.interface'
import Book from '../domain/book'
import { BookRepository } from '../domain/book.repository'

export default class BookApplication {

    //DESIGN PATTERN: INJECTION DEPENDENCY
    constructor(private readonly bookRepository: BookRepository) {}

    insert(book: Book) {
        return this.bookRepository.insert(book)
    }

    list() {
        return this.bookRepository.list()
    }

    listOne(guid: string) {
        return this.bookRepository.listOne(guid)
    }

    update(guid: string, book: Partial<BookUpdate>) {
        return this.bookRepository.update(guid, book)
    }

    delete(guid: string) {
        return this.bookRepository.delete(guid)
    }
}