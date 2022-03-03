import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateCarController } from '@modules/cars/useCases/cars/createCar/CreateCarController'
import { ReadCarsController } from '@modules/cars/useCases/cars/readCars/ReadCarsController'

import { Router } from 'express'

const carsRoutes = Router()

const createCarController = new CreateCarController()
const readCarsController = new ReadCarsController()

carsRoutes.get('/', readCarsController.handle)

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
)

export { carsRoutes }
