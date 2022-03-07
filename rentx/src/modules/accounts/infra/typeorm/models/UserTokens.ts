import { User } from './User'

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users_tokens')
class UserTokens {
  @PrimaryColumn()
  id: string

  @Column()
  user_id: string

  @Column()
  refresh_token: string

  @Column()
  expires_date: Date

  @CreateDateColumn()
  created_at: Date

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { UserTokens }
