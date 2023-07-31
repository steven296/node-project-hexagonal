import { BookProperties } from 'src/modules/book/domain/types/bookProperties.type'
import { DTO } from './dto.generic'
import { BookListDTO } from './types/bookList.type'

export class BookListMapping extends DTO<BookProperties[], BookListDTO> {
  
    execute(data: BookProperties[]): BookListDTO {
        return data.map((book: BookProperties) => {
            return {
                title: book.title,
                author: book.author,
                guid: book.guid,
            }
        })
    }
}