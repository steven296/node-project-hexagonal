import { BookProperties } from 'src/modules/book/domain/types/bookProperties.type'
import { DTO } from './dto.generic'
import { BookInsertOneDTO } from './types/bookInsert.type'

export class BookInsertMapping extends DTO<BookProperties, BookInsertOneDTO> {

  execute(data: BookProperties): BookInsertOneDTO {
    return {
      title: data.title,
      author: data.author,
      content: data.content,
      pages: data.pages,
      language: data.language,
      guid: data.guid,
    }
  }
}