import { validate as uuidValidate } from 'uuid'
import { ValueObject } from './vo.class'
import { BookGuidInvalidException } from '../exceptions/book.exception'
import { err, ok, Result } from 'neverthrow'

interface GuidProps {
  value: string
}

type GuidResult = Result<GuidVO, BookGuidInvalidException>

export class GuidVO extends ValueObject<GuidProps> {
  private constructor(props: GuidProps) {
    super(props)
  }

  static create(guid: string): GuidResult {
    if (!uuidValidate(guid)) {
      return err(new BookGuidInvalidException())
    }

    return ok(new GuidVO({ value: guid }))
  }

  get value(): string {
    return this.props.value
  }
}