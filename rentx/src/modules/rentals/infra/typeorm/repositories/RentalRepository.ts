import { Rental } from '../models/Rental'
import { ICreateRentalDTO, IRentalRepository } from './IRentalRepository'

import { getRepository, Repository } from 'typeorm'

class RentalRepository implements IRentalRepository {
  private repository: Repository<Rental>

  constructor() {
    this.repository = getRepository(Rental)
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return await this.repository.findOne(car_id)
  }

  async create(createData: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create(createData)
    await this.repository.save(rental)
    return rental
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return await this.repository.findOne(user_id)
  }
}

export { RentalRepository }
