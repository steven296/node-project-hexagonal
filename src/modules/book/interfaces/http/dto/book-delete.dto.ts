import { BookProperties } from 'src/modules/book/domain/types/bookProperties.type'
import { DTO } from './dto.generic'
import { BookDeleteDTO } from './types/bookDelete.type'

export class BookDeleteMapping extends DTO<BookProperties, BookDeleteDTO> {

    execute(data: BookProperties): BookDeleteDTO {
        return {
            title: data.title,
            author: data.author,
            language: data.language,
            guid: data.guid,
        }
    }
}