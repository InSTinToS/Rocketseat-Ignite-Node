import { Rental } from '../models/Rental'

export interface ICreateRentalDTO {
  user_id: string
  car_id: string
  expected_date: Date
}

interface IRentalRepository {
  findOpenRentalByCar(car_id: string): Promise<Rental>
  create(createData: ICreateRentalDTO): Promise<Rental>
  findOpenRentalByUser(user_id: string): Promise<Rental>
}

export { IRentalRepository }
