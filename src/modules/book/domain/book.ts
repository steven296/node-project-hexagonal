import { IEntity } from '../../shared/entity.interface'
import { BookProperties } from './types/bookProperties.type'
import { BookUpdate } from './interfaces/bookUpdate.interface'

export default class Book implements IEntity<BookProperties, BookUpdate> {

    private title: string
    private author: string
    private content: string
    private pages: string
    private language: string
    private active: boolean
    private readonly guid: string

    constructor(bookProperties:BookProperties) {
        this.active = true
        Object.assign(this, bookProperties)
    }

    properties(): BookProperties {
        return {
           title: this.title,
           author: this.author,
           content: this.content,
           pages: this.pages,
           language: this.language,
           active: this.active,
           guid: this.guid,
        }
     }
  
     update(fields: BookUpdate) {
        Object.assign(this, fields)
     }
  
     delete() {
        this.active = false
     }
}