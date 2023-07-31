export enum DomainExceptionCode {
    DEFAULT_DOMAIN_EXCEPTION = 'DEFAULT_DOMAIN_EXCEPTION',
    BOOK_TITLE_REQUIRED = 'BOOK_TITLE_REQUIRED',
    BOOK_AUTHOR_REQUIRED = 'BOOK_AUTHOR_REQUIRED',
    BOOK_PAGES_REQUIRED = 'BOOK_PAGES_REQUIRED',
    BOOK_LANGUAGE_REQUIRED = 'BOOK_LANGUAGE_REQUIRED',
    BOOK_GUID_INVALID = 'BOOK_GUID_INVALID',
    BOOK_NOT_FOUND = 'BOOK_NOT_FOUND',
}

export abstract class DomainException extends Error {
    constructor(message?: string) {
      super(message)
      this.name = DomainExceptionCode.DEFAULT_DOMAIN_EXCEPTION
    }
}