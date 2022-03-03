import { ICarsRepository, ICreateCarDTO } from './ICarsRepository'

import { Car } from '@modules/cars/infra/typeorm/models/Car'

class CarsRepositoryInMemory implements ICarsRepository {
  private cars: Car[] = []

  async create(newCarData: ICreateCarDTO): Promise<Car> {
    const car = new Car()
    Object.assign(car, newCarData)
    this.cars.push(car)

    return car
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find(car => car.license_plate === license_plate)
  }

  async read(): Promise<Car[]> {
    return this.cars
  }
}

export { CarsRepositoryInMemory }
