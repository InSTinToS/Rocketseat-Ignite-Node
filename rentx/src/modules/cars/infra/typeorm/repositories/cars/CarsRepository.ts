import { ICarsRepository, ICreateCarDTO } from './ICarsRepository'

import { Car } from '@modules/cars/infra/typeorm/models/Car'

import { getRepository, Repository } from 'typeorm'

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>

  constructor() {
    this.repository = getRepository(Car)
  }

  async read(): Promise<Car[]> {
    return await this.repository.find()
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({ license_plate })
    return car
  }

  async create(newCarData: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create(newCarData)
    await this.repository.save(car)
    return car
  }
}

export { CarsRepository }
