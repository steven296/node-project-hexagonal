import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class BookEntity {
  @PrimaryColumn()
  guid: string

  @Column({ type: 'varchar', length: 100 })
  title: string

  @Column({ type: 'varchar', length: 100 })
  author: string

  @Column({ type: 'varchar', length: 200 })
  content: string

  @Column({ type: 'varchar', length: 100 })
  pages: string

  @Column({ type: 'varchar', length: 100 })
  language: string

  @Column({ type: 'boolean', default: true })
  active: boolean
}