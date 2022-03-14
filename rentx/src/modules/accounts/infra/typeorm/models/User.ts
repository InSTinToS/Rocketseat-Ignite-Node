import { Expose } from 'class-transformer'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users')
class User {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  avatar: string

  @Column()
  password: string

  @Column()
  isAdmin: boolean

  @CreateDateColumn()
  created_at: Date

  @Column()
  driver_license: string

  @Expose({ name: 'avatar_url' })
  getAvatarURL(): string {
    if (process.env.LOCAL_STORAGE) {
      return `${process.env.BASE_URL}/avatar/${this.avatar}`
    } else {
      return `${process.env.AWS_BUCKER_URL}/avatar/${this.avatar}`
    }
  }

  constructor() {
    if (!this.id) this.id = uuid()
  }
}

export { User }
