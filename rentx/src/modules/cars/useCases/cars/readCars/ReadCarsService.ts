import { ICarsRepository } from '@modules/cars/infra/typeorm/repositories/cars/ICarsRepository'

import { inject, injectable } from 'tsyringe'

@injectable()
class ReadCarsService {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository
  ) {}

  async execute() {
    return await this.carsRepository.read()
  }
}

export { ReadCarsService }
