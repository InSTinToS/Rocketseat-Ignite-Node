import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'
import { v4 } from 'uuid'

@Entity('rentals')
class Rental {
  @PrimaryColumn()
  id: string

  @Column()
  total: number

  @Column()
  car_id: string

  @Column()
  user_id: string

  @Column()
  end_date: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @Column()
  start_date: string

  constructor() {
    if (!this.id) this.id = v4()
  }
}

export { Rental }
