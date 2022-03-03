import { CreateCarService } from '../createCar/createCarService'
import { ReadCarsService } from './ReadCarsService'

import { CarsRepositoryInMemory } from '@modules/cars/infra/typeorm/repositories/cars/ICarsRepositoryInMemory'
import { ICreateCarDTO } from '@modules/cars/infra/typeorm/repositories/cars/ICarsRepository'

import { v4 } from 'uuid'

const createCarData: ICreateCarDTO = {
  name: 'name',
  brand: 'brand',
  daily_rate: 99,
  fine_amount: 999,
  description: 'description',
  category_id: 'category_id',
  license_plate: v4()
}

let readCarsService: ReadCarsService
let createCarService: CreateCarService
let carsRepositoryInMemory: CarsRepositoryInMemory

describe('Read cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    readCarsService = new ReadCarsService(carsRepositoryInMemory)
    createCarService = new CreateCarService(carsRepositoryInMemory)
  })

  it('should be able to read cars', async () => {
    const createdCar = await createCarService.execute(createCarData)
    const cars = await readCarsService.execute()

    expect(cars[0]).toBe(createdCar)
  })
})
