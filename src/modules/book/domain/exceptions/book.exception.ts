import { DomainException, DomainExceptionCode } from './domain.exception'

export class BookTitleRequiredException extends DomainException {
  constructor() {
    super(BookTitleRequiredException.getMessage())
    this.name = DomainExceptionCode.BOOK_TITLE_REQUIRED
  }

  static getMessage() {
    return 'Title is required'
  }
}

export class BookAuthorRequiredException extends DomainException {
  constructor() {
    super(BookAuthorRequiredException.getMessage())
    this.name = DomainExceptionCode.BOOK_AUTHOR_REQUIRED
  }

  static getMessage() {
    return 'Author is required'
  }
}

export class BookPagesRequiredException extends DomainException {
  constructor() {
    super(BookPagesRequiredException.getMessage())
    this.name = DomainExceptionCode.BOOK_PAGES_REQUIRED
  }

  static getMessage() {
    return 'Pages is required'
  }
}

export class BookLanguageRequiredException extends DomainException {
  constructor() {
    super(BookLanguageRequiredException.getMessage())
    this.name = DomainExceptionCode.BOOK_LANGUAGE_REQUIRED
  }

  static getMessage() {
    return 'Language is required'
  }
}

export class BookGuidInvalidException extends DomainException {
  constructor() {
    super(BookGuidInvalidException.getMessage())
    this.name = DomainExceptionCode.BOOK_GUID_INVALID
  }

  static getMessage() {
    return 'Guid is invalid'
  }
}

export class BookNotFoundException extends DomainException {
  constructor() {
    super(BookNotFoundException.getMessage())
    this.name = DomainExceptionCode.BOOK_NOT_FOUND
  }

  static getMessage() {
    return 'Book not found'
  }
}