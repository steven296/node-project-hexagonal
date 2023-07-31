import { BookProperties } from 'src/modules/book/domain/types/bookProperties.type'
import { DTO } from './dto.generic'
import { BookUpdateDTO } from './types/bookUpdate.type'

export class BookUpdateMapping extends DTO<BookProperties, BookUpdateDTO> {

    execute(data: BookProperties): BookUpdateDTO {
        return {
            title: data.title,
            content: data.content,
            pages: data.pages,
            language: data.language,
            guid: data.guid,
        }
    }
}