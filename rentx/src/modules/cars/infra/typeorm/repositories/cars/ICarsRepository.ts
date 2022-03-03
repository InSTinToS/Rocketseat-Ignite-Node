import { Car } from '@modules/cars/infra/typeorm/models/Car'

interface ICreateCarDTO {
  name: Car['name']
  brand: Car['brand']
  daily_rate: Car['daily_rate']
  description: Car['description']
  fine_amount: Car['fine_amount']
  category_id: Car['category_id']
  license_plate: Car['license_plate']
}

interface ICarsRepository {
  read(): Promise<Car[]>
  create(newCarData: ICreateCarDTO): Promise<Car>
  findByLicensePlate(license_plate: Car['license_plate']): Promise<Car>
}

export { ICarsRepository }
export type { ICreateCarDTO }
