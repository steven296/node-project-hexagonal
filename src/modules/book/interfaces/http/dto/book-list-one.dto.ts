import { BookProperties } from 'src/modules/book/domain/types/bookProperties.type'
import { DTO } from './dto.generic'
import { BookListOneDTO } from './types/bookListOne.type'

export class BookListOneMapping extends DTO<BookProperties, BookListOneDTO> {

    execute(data: BookProperties): BookListOneDTO {
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