import { Rental } from '../models/Rental'
import { ICreateRentalDTO, IRentalRepository } from './IRentalRepository'

class RentalRepositoryInMemory implements IRentalRepository {
  private rentals: Rental[] = []

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return this.rentals.find(
      rental => rental.car_id === car_id && !rental.end_date
    )
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return this.rentals.find(
      rental => rental.user_id === user_id && !rental.end_date
    )
  }

  async create(createData: ICreateRentalDTO): Promise<Rental> {
    const rental = new Rental()

    Object.assign(rental, { ...createData, start_date: new Date() })
    this.rentals.push(rental)

    return rental
  }
}

export { RentalRepositoryInMemory }
