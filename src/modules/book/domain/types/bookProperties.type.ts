import { BookOptional } from '../interfaces/bookOptional.interface'
import { BookRequired } from '../interfaces/bookRequired.interface'

//SOLID PRINCIPLE: INTERFACE SEGREGATION
export type BookProperties = Required<BookRequired> & Partial<BookOptional>